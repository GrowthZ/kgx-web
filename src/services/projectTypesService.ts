import { FirebaseService, generateSlug } from '../lib/firebaseService';
import { orderBy } from 'firebase/firestore';

export interface ProjectType {
    id?: string;
    name: string;
    slug: string;
    order?: number;
    createdAt?: any;
    updatedAt?: any;
}

class ProjectTypesService extends FirebaseService<ProjectType> {
    constructor() {
        super('projectTypes');
    }

    async getAllProjectTypes(): Promise<ProjectType[]> {
        return this.getAll([orderBy('createdAt', 'asc')]);
    }

    async createProjectType(data: Omit<ProjectType, 'id'>): Promise<string> {
        if (!data.slug) {
            data.slug = generateSlug(data.name);
        }
        return this.create(data);
    }

    async updateProjectType(id: string, data: Partial<ProjectType>): Promise<void> {
        if (data.name && !data.slug) {
            data.slug = generateSlug(data.name);
        }
        return this.update(id, data);
    }

    async deleteProjectType(id: string): Promise<void> {
        return this.delete(id);
    }
}

export const projectTypesService = new ProjectTypesService();
