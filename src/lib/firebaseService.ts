import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit,
    startAfter,
    QueryConstraint,
    DocumentData,
    Timestamp,
} from 'firebase/firestore';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
    listAll,
    getMetadata,
} from 'firebase/storage';
import { db, storage } from './firebase';

export interface StorageFile {
    name: string;
    url: string;
    path: string;
    type: string;
    size: number;
    updatedAt: string;
}

export interface StorageFolder {
    name: string;
    path: string;
}

export const listStorageFiles = async (path: string): Promise<{ files: StorageFile[], folders: StorageFolder[] }> => {
    try {
        const listRef = ref(storage, path);
        const res = await listAll(listRef);

        const folderPromises = res.prefixes.map(async (folderRef) => ({
            name: folderRef.name,
            path: folderRef.fullPath,
        }));

        const filePromises = res.items.map(async (itemRef) => {
            const [url, metadata] = await Promise.all([
                getDownloadURL(itemRef),
                getMetadata(itemRef)
            ]);
            return {
                name: itemRef.name,
                url,
                path: itemRef.fullPath,
                type: metadata.contentType || 'application/octet-stream',
                size: metadata.size,
                updatedAt: metadata.updated,
            };
        });

        const [folders, files] = await Promise.all([
            Promise.all(folderPromises),
            Promise.all(filePromises)
        ]);

        return { folders, files };
    } catch (error) {
        console.error('Error listing storage files:', error);
        throw error;
    }
};

// Generic CRUD operations for Firestore collections
export class FirebaseService<T extends DocumentData> {
    private collectionName: string;

    constructor(collectionName: string) {
        this.collectionName = collectionName;
    }

    // Get all documents with optional filtering and pagination
    async getAll(
        constraints: QueryConstraint[] = [],
        limitCount?: number
    ): Promise<T[]> {
        try {
            const collectionRef = collection(db, this.collectionName);
            const queryConstraints = [...constraints];

            if (limitCount) {
                queryConstraints.push(limit(limitCount));
            }

            const q = query(collectionRef, ...queryConstraints);
            const snapshot = await getDocs(q);

            return snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            } as unknown as T));
        } catch (error) {
            console.error(`Error getting documents from ${this.collectionName}:`, error);
            throw error;
        }
    }

    // Get a single document by ID
    async getById(id: string): Promise<T | null> {
        try {
            const docRef = doc(db, this.collectionName, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return {
                    ...docSnap.data(),
                    id: docSnap.id,
                } as unknown as T;
            }

            return null;
        } catch (error) {
            console.error(`Error getting document ${id} from ${this.collectionName}:`, error);
            throw error;
        }
    }

    // Get a single document by field value
    async getByField(fieldName: string, value: any): Promise<T | null> {
        try {
            const collectionRef = collection(db, this.collectionName);
            const q = query(collectionRef, where(fieldName, '==', value), limit(1));
            const snapshot = await getDocs(q);

            if (!snapshot.empty) {
                const doc = snapshot.docs[0];
                return {
                    ...doc.data(),
                    id: doc.id,
                } as unknown as T;
            }

            return null;
        } catch (error) {
            console.error(`Error getting document by ${fieldName} from ${this.collectionName}:`, error);
            throw error;
        }
    }

    // Create a new document
    async create(data: Omit<T, 'id'>): Promise<string> {
        try {
            const collectionRef = collection(db, this.collectionName);
            const docData = {
                ...data,
                createdAt: Timestamp.now(),
                updatedAt: Timestamp.now(),
            };

            const docRef = await addDoc(collectionRef, docData);
            return docRef.id;
        } catch (error) {
            console.error(`Error creating document in ${this.collectionName}:`, error);
            throw error;
        }
    }

    // Update an existing document
    async update(id: string, data: Partial<T>): Promise<void> {
        try {
            const docRef = doc(db, this.collectionName, id);
            const updateData = {
                ...data,
                updatedAt: Timestamp.now(),
            };

            await updateDoc(docRef, updateData);
        } catch (error) {
            console.error(`Error updating document ${id} in ${this.collectionName}:`, error);
            throw error;
        }
    }

    // Delete a document
    async delete(id: string): Promise<void> {
        try {
            const docRef = doc(db, this.collectionName, id);
            await deleteDoc(docRef);
        } catch (error) {
            console.error(`Error deleting document ${id} from ${this.collectionName}:`, error);
            throw error;
        }
    }
}

// Image upload/delete functions for Firebase Storage
export const uploadImage = async (
    file: File,
    path: string
): Promise<string> => {
    try {
        const storageRef = ref(storage, path);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

export const deleteImage = async (imageUrl: string): Promise<void> => {
    try {
        // Extract the path from the URL
        const baseUrl = 'https://firebasestorage.googleapis.com/v0/b/';
        if (!imageUrl.startsWith(baseUrl)) {
            throw new Error('Invalid Firebase Storage URL');
        }

        const pathStart = imageUrl.indexOf('/o/') + 3;
        const pathEnd = imageUrl.indexOf('?');
        const encodedPath = imageUrl.substring(pathStart, pathEnd);
        const path = decodeURIComponent(encodedPath);

        const storageRef = ref(storage, path);
        await deleteObject(storageRef);
    } catch (error) {
        console.error('Error deleting image:', error);
        throw error;
    }
};

// Helper to generate slug from title
export const generateSlug = (title: string): string => {
    return title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
        .replace(/đ/g, 'd')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
};
