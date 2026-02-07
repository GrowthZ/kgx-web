import { FirebaseService, generateSlug, uploadImage, deleteImage } from '../lib/firebaseService';
import { where, orderBy } from 'firebase/firestore';

export interface Service {
    id?: string;
    slug: string;
    title: string;
    category: 'thiet-ke' | 'thi-cong';
    categoryLabel?: string;
    description: string;
    shortDescription?: string;
    image: string;
    features?: string[];
    images?: string[];
    icon?: string;
    processSteps?: Array<{ title: string; description: string }>;
    sections?: Array<{
        title: string;
        content?: string;
        type?: string;
        subtitle?: string;
        description?: string;
        items?: Array<{ icon?: string; title: string; desc: string }>;
        image?: string;
    }>;
    order?: number;
    createdAt?: any;
    updatedAt?: any;
    metaTitle?: string;
}

class ServicesService extends FirebaseService<Service> {
    constructor() {
        super('services');
    }

    async getAllServices(category?: 'thiet-ke' | 'thi-cong'): Promise<Service[]> {
        const constraints = [];

        if (category) {
            constraints.push(where('category', '==', category));
        }

        constraints.push(orderBy('order', 'asc'));

        return this.getAll(constraints);
    }

    async getServiceBySlug(slug: string): Promise<Service | null> {
        return this.getByField('slug', slug);
    }

    async createService(data: Omit<Service, 'id'>): Promise<string> {
        if (!data.slug) {
            data.slug = generateSlug(data.title);
        }

        return this.create(data);
    }

    async updateService(id: string, data: Partial<Service>): Promise<void> {
        return this.update(id, data);
    }

    async deleteService(id: string): Promise<void> {
        const service = await this.getById(id);

        if (service && service.images && service.images.length > 0) {
            for (const imageUrl of service.images) {
                try {
                    await deleteImage(imageUrl);
                } catch (error) {
                    console.error('Error deleting service image:', error);
                }
            }
        }

        return this.delete(id);
    }

    async uploadServiceImage(file: File, serviceId: string): Promise<string> {
        const path = `services/${serviceId}/${Date.now()}_${file.name}`;
        return uploadImage(file, path);
    }
}

export const servicesService = new ServicesService();
