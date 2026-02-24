import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';

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
        const key = generateKey(file);
        const arrayBuffer = await file.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);

        const command = new PutObjectCommand({
            Bucket: R2_BUCKET,
            Key: key,
            Body: uint8Array,
            ContentType: file.type || 'application/octet-stream',
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
