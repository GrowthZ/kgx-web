import { S3Client, PutObjectCommand, DeleteObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import type { StorageFile } from './firebaseService';

const R2_ENDPOINT = (import.meta as any).env.VITE_R2_ENDPOINT;
const R2_ACCESS_KEY_ID = (import.meta as any).env.VITE_R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = (import.meta as any).env.VITE_R2_SECRET_ACCESS_KEY;
const R2_BUCKET = (import.meta as any).env.VITE_R2_BUCKET || 'kgx';
const R2_PUBLIC_URL = (import.meta as any).env.VITE_R2_PUBLIC_URL;

const s3Client = new S3Client({
    region: 'auto',
    endpoint: R2_ENDPOINT,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
});

const IMAGE_MAX_DIMENSION = 2560;
const IMAGE_QUALITY = 0.82;

const shouldOptimizeImage = (file: File | Blob): boolean => {
    if (!file.type?.startsWith('image/')) {
        return false;
    }

    if (file.type === 'image/svg+xml' || file.type === 'image/gif') {
        return false;
    }

    return typeof window !== 'undefined' && typeof document !== 'undefined';
};

const optimizeImageForUpload = async (file: File | Blob): Promise<File | Blob> => {
    if (!shouldOptimizeImage(file)) {
        return file;
    }

    const objectUrl = URL.createObjectURL(file);

    try {
        const image = await new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error('Unable to load image for optimization'));
            img.src = objectUrl;
        });

        const scale = Math.min(1, IMAGE_MAX_DIMENSION / Math.max(image.width, image.height));
        const targetWidth = Math.max(1, Math.round(image.width * scale));
        const targetHeight = Math.max(1, Math.round(image.height * scale));

        const canvas = document.createElement('canvas');
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        const context = canvas.getContext('2d');
        if (!context) {
            return file;
        }

        context.drawImage(image, 0, 0, targetWidth, targetHeight);

        const optimizedBlob = await new Promise<Blob | null>((resolve) => {
            canvas.toBlob((blob) => resolve(blob), 'image/webp', IMAGE_QUALITY);
        });

        if (!optimizedBlob) {
            return file;
        }

        const wasResized = targetWidth !== image.width || targetHeight !== image.height;
        const hasMeaningfulSizeReduction = optimizedBlob.size < file.size * 0.97;

        return wasResized || hasMeaningfulSizeReduction ? optimizedBlob : file;
    } catch (error) {
        console.warn('Image optimization failed, fallback to original file:', error);
        return file;
    } finally {
        URL.revokeObjectURL(objectUrl);
    }
};

/**
 * Generate a unique file key for R2 storage.
 * Format: uploads/YYYY/MM/timestamp-random.ext
 */
const generateKey = (file: File | Blob): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const timestamp = now.getTime();
    const random = Math.random().toString(36).substring(2, 8);

    let ext = 'bin';
    if (file instanceof File && file.name) {
        const parts = file.name.split('.');
        if (parts.length > 1) ext = parts.pop()!.toLowerCase();
    } else if (file.type) {
        const mimeToExt: Record<string, string> = {
            'image/jpeg': 'jpg',
            'image/png': 'png',
            'image/webp': 'webp',
            'image/gif': 'gif',
            'image/svg+xml': 'svg',
        };
        ext = mimeToExt[file.type] || 'bin';
    }

    return `uploads/${year}/${month}/${timestamp}-${random}.${ext}`;
};

/**
 * Upload a file to Cloudflare R2.
 * Returns the public URL of the uploaded file.
 */
export const uploadToR2 = async (file: File | Blob): Promise<string> => {
    try {
        const processedFile = await optimizeImageForUpload(file);
        const key = generateKey(processedFile);
        const arrayBuffer = await processedFile.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);

        const command = new PutObjectCommand({
            Bucket: R2_BUCKET,
            Key: key,
            Body: uint8Array,
            ContentType: processedFile.type || 'application/octet-stream',
        });

        await s3Client.send(command);

        // Construct public URL
        if (R2_PUBLIC_URL) {
            return `${R2_PUBLIC_URL}/${key}`;
        }

        // Fallback: use endpoint URL (requires public access enabled)
        return `${R2_ENDPOINT}/${R2_BUCKET}/${key}`;
    } catch (error) {
        console.error('R2 upload error:', error);
        throw error;
    }
};

/**
 * Delete a file from Cloudflare R2 by its key or full URL.
 */
export const deleteFromR2 = async (keyOrUrl: string): Promise<void> => {
    try {
        let key = keyOrUrl;

        // Extract key from full URL if needed
        if (keyOrUrl.startsWith('http')) {
            const url = new URL(keyOrUrl);
            key = url.pathname.startsWith('/') ? url.pathname.slice(1) : url.pathname;
            // Remove bucket name prefix if present
            if (key.startsWith(`${R2_BUCKET}/`)) {
                key = key.slice(R2_BUCKET.length + 1);
            }
        }

        const command = new DeleteObjectCommand({
            Bucket: R2_BUCKET,
            Key: key,
        });

        await s3Client.send(command);
    } catch (error) {
        console.error('R2 delete error:', error);
        throw error;
    }
};

/**
 * List all files in the R2 bucket (optionally under a prefix).
 * Returns StorageFile[] compatible with MediaManager.
 */
export const listR2Files = async (prefix?: string): Promise<StorageFile[]> => {
    try {
        const command = new ListObjectsV2Command({
            Bucket: R2_BUCKET,
            Prefix: prefix || '',
            MaxKeys: 1000,
        });

        const response = await s3Client.send(command);
        const contents = response.Contents || [];

        const extToMime: Record<string, string> = {
            jpg: 'image/jpeg',
            jpeg: 'image/jpeg',
            png: 'image/png',
            webp: 'image/webp',
            gif: 'image/gif',
            svg: 'image/svg+xml',
            pdf: 'application/pdf',
        };

        return contents
            .filter((obj) => obj.Key && !obj.Key.endsWith('/'))
            .map((obj) => {
                const key = obj.Key!;
                const name = key.split('/').pop() || key;
                const ext = name.split('.').pop()?.toLowerCase() || '';
                const type = extToMime[ext] || 'application/octet-stream';
                const url = R2_PUBLIC_URL ? `${R2_PUBLIC_URL}/${key}` : `${R2_ENDPOINT}/${R2_BUCKET}/${key}`;

                return {
                    name,
                    url,
                    path: key,
                    type,
                    size: obj.Size || 0,
                    updatedAt: obj.LastModified?.toISOString() || new Date().toISOString(),
                } as StorageFile;
            });
    } catch (error) {
        console.error('R2 list error:', error);
        throw error;
    }
};

