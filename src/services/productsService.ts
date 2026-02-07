import { FirebaseService, generateSlug, uploadImage, deleteImage } from '../lib/firebaseService';
import { where, orderBy } from 'firebase/firestore';

export interface Product {
    id?: string;
    slug: string;
    name: string;
    scientificName: string;
    categorySlug: string;
    category: string;
    height: string;
    growth: string;
    light: string;
    water: string;
    leaves: string;
    description: string;
    image: string;
    macroImage?: string;
    pros?: Array<{ title: string; desc: string }>;
    cons?: Array<{ title: string; desc: string }>;
    care?: Array<{ icon: string; title: string; desc: string }>;
    applications?: Array<{ title: string; desc: string; image: string }>;
    targetProfiles?: Array<{ icon: string; title: string; desc: string; color: string }>;
    featuredProjects?: Array<{ title: string; year: string; image: string }>;
    createdAt?: any;
    updatedAt?: any;
}

class ProductsService extends FirebaseService<Product> {
    constructor() {
        super('products');
    }

    async getAllProducts(categorySlug?: string): Promise<Product[]> {
        const constraints = [];

        if (categorySlug) {
            constraints.push(where('categorySlug', '==', categorySlug));
        }

        constraints.push(orderBy('createdAt', 'desc'));

        return this.getAll(constraints);
    }

    async getProductBySlug(slug: string): Promise<Product | null> {
        return this.getByField('slug', slug);
    }

    async createProduct(data: Omit<Product, 'id'>): Promise<string> {
        // Generate slug if not provided
        if (!data.slug) {
            data.slug = generateSlug(data.name);
        }

        return this.create(data);
    }

    async updateProduct(id: string, data: Partial<Product>): Promise<void> {
        return this.update(id, data);
    }

    async deleteProduct(id: string): Promise<void> {
        // Get product to delete images
        const product = await this.getById(id);

        if (product) {
            // Delete main image
            if (product.image) {
                try {
                    await deleteImage(product.image);
                } catch (error) {
                    console.error('Error deleting product image:', error);
                }
            }

            // Delete macro image
            if (product.macroImage) {
                try {
                    await deleteImage(product.macroImage);
                } catch (error) {
                    console.error('Error deleting macro image:', error);
                }
            }
        }

        return this.delete(id);
    }

    async uploadProductImage(file: File, productId: string, type: 'main' | 'macro' = 'main'): Promise<string> {
        const path = `products/${productId}/${type}_${Date.now()}_${file.name}`;
        return uploadImage(file, path);
    }
}

export const productsService = new ProductsService();
