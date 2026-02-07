import { FirebaseService, generateSlug, uploadImage, deleteImage } from '../lib/firebaseService';
import { where, orderBy } from 'firebase/firestore';

export interface Project {
    id?: string;
    slug: string;
    category: string;
    filterCategory?: string;
    displayCategory?: string;
    title: string;
    location: string;
    description?: string;
    image: string;
    images?: string[];
    aspect?: string;
    year?: string;
    client?: string;
    area?: string;
    services?: string[];
    createdAt?: any;
    updatedAt?: any;
}

class ProjectsService extends FirebaseService<Project> {
    constructor() {
        super('projects');
    }

    async getAllProjects(category?: string): Promise<Project[]> {
        const constraints = [];

        if (category) {
            constraints.push(where('filterCategory', '==', category));
        }

        constraints.push(orderBy('createdAt', 'desc'));

        return this.getAll(constraints);
    }

    async getProjectBySlug(slug: string): Promise<Project | null> {
        return this.getByField('slug', slug);
    }

    async createProject(data: Omit<Project, 'id'>): Promise<string> {
        if (!data.slug) {
            data.slug = generateSlug(data.title);
        }

        return this.create(data);
    }

    async updateProject(id: string, data: Partial<Project>): Promise<void> {
        return this.update(id, data);
    }

    async deleteProject(id: string): Promise<void> {
        const project = await this.getById(id);

        if (project) {
            // Delete main image
            if (project.image) {
                try {
                    await deleteImage(project.image);
                } catch (error) {
                    console.error('Error deleting project image:', error);
                }
            }

            // Delete gallery images
            if (project.images && project.images.length > 0) {
                for (const imageUrl of project.images) {
                    try {
                        await deleteImage(imageUrl);
                    } catch (error) {
                        console.error('Error deleting gallery image:', error);
                    }
                }
            }
        }

        return this.delete(id);
    }

    async uploadProjectImage(file: File, projectId: string): Promise<string> {
        const path = `projects/${projectId}/${Date.now()}_${file.name}`;
        return uploadImage(file, path);
    }
}

export const projectsService = new ProjectsService();
