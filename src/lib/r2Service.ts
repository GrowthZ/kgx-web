import { AwsClient } from 'aws4fetch';
import type { StorageFile } from './firebaseService';

const R2_ENDPOINT = (import.meta as any).env.VITE_R2_ENDPOINT as string;
const R2_ACCESS_KEY_ID = (import.meta as any).env.VITE_R2_ACCESS_KEY_ID as string;
const R2_SECRET_ACCESS_KEY = (import.meta as any).env.VITE_R2_SECRET_ACCESS_KEY as string;
const R2_BUCKET = ((import.meta as any).env.VITE_R2_BUCKET || 'kgx') as string;
const R2_PUBLIC_URL = (import.meta as any).env.VITE_R2_PUBLIC_URL as string;

// aws4fetch is a browser-compatible AWS Signature V4 client.
// It does NOT use a credential resolution chain, so it works in Vite/browser environments.
const getAwsClient = () =>
    new AwsClient({
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY,
        service: 's3',
        region: 'auto',
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
 * Upload a file to Cloudflare R2 using aws4fetch (browser-compatible).
 * Returns the public URL of the uploaded file.
 */
export const uploadToR2 = async (file: File | Blob): Promise<string> => {
    try {
        const processedFile = await optimizeImageForUpload(file);
        const key = generateKey(processedFile);
        const arrayBuffer = await processedFile.arrayBuffer();
        const contentType = processedFile.type || 'application/octet-stream';

        // Build the R2 object URL: endpoint/bucket/key
        const uploadUrl = `${R2_ENDPOINT}/${R2_BUCKET}/${key}`;

        const client = getAwsClient();
        const response = await client.fetch(uploadUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': contentType,
            },
            body: arrayBuffer,
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(`R2 upload failed: ${response.status} ${response.statusText} – ${text}`);
        }

        // Return public URL
        if (R2_PUBLIC_URL) {
            return `${R2_PUBLIC_URL}/${key}`;
        }

        return uploadUrl;
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

        const deleteUrl = `${R2_ENDPOINT}/${R2_BUCKET}/${key}`;
        const client = getAwsClient();
        const response = await client.fetch(deleteUrl, { method: 'DELETE' });

        if (!response.ok && response.status !== 204) {
            const text = await response.text();
            throw new Error(`R2 delete failed: ${response.status} ${response.statusText} – ${text}`);
        }
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
        const params = new URLSearchParams({ 'list-type': '2', 'max-keys': '1000' });
        if (prefix) params.set('prefix', prefix);

        const listUrl = `${R2_ENDPOINT}/${R2_BUCKET}?${params.toString()}`;
        const client = getAwsClient();
        const response = await client.fetch(listUrl, { method: 'GET' });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(`R2 list failed: ${response.status} ${response.statusText} – ${text}`);
        }

        const text = await response.text();

        // Parse XML response
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'application/xml');
        const contents = Array.from(xml.getElementsByTagName('Contents'));

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
            .map((el) => {
                const key = el.getElementsByTagName('Key')[0]?.textContent || '';
                const size = parseInt(el.getElementsByTagName('Size')[0]?.textContent || '0', 10);
                const lastModified = el.getElementsByTagName('LastModified')[0]?.textContent || '';

                if (!key || key.endsWith('/')) return null;

                const name = key.split('/').pop() || key;
                const ext = name.split('.').pop()?.toLowerCase() || '';
                const type = extToMime[ext] || 'application/octet-stream';
                const url = R2_PUBLIC_URL
                    ? `${R2_PUBLIC_URL}/${key}`
                    : `${R2_ENDPOINT}/${R2_BUCKET}/${key}`;

                return {
                    name,
                    url,
                    path: key,
                    type,
                    size,
                    updatedAt: lastModified || new Date().toISOString(),
                } as StorageFile;
            })
            .filter((item): item is StorageFile => item !== null);
    } catch (error) {
        console.error('R2 list error:', error);
        throw error;
    }
};
