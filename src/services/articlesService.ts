import { FirebaseService, generateSlug, uploadImage, deleteImage } from '../lib/firebaseService';
import { where, orderBy } from 'firebase/firestore';

export interface Article {
    id?: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    featuredImage: string;
    category?: string;
    tags?: string[];
    author?: string;
    published: boolean;
    publishedAt?: any;
    createdAt?: any;
    updatedAt?: any;
}

class ArticlesService extends FirebaseService<Article> {
    constructor() {
        super('articles');
    }

    async getAllArticles(published?: boolean): Promise<Article[]> {
        const constraints = [];

        if (published !== undefined) {
            constraints.push(where('published', '==', published));
        }

        constraints.push(orderBy('createdAt', 'desc'));

        return this.getAll(constraints);
    }

    async getArticleBySlug(slug: string): Promise<Article | null> {
        return this.getByField('slug', slug);
    }

    async createArticle(data: Omit<Article, 'id'>): Promise<string> {
        if (!data.slug) {
            data.slug = generateSlug(data.title);
        }

        return this.create(data);
    }

    async updateArticle(id: string, data: Partial<Article>): Promise<void> {
        return this.update(id, data);
    }

    async publishArticle(id: string, published: boolean): Promise<void> {
        const updateData: Partial<Article> = {
            published,
        };

        if (published) {
            updateData.publishedAt = new Date();
        }

        return this.update(id, updateData);
    }

    async deleteArticle(id: string): Promise<void> {
        const article = await this.getById(id);

        if (article && article.featuredImage) {
            try {
                await deleteImage(article.featuredImage);
            } catch (error) {
                console.error('Error deleting article image:', error);
            }
        }

        return this.delete(id);
    }

    async uploadArticleImage(file: File, articleId: string): Promise<string> {
        const path = `articles/${articleId}/${Date.now()}_${file.name}`;
        return uploadImage(file, path);
    }
}

export const articlesService = new ArticlesService();
