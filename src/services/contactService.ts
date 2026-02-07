import { FirebaseService } from '../lib/firebaseService';
import { orderBy } from 'firebase/firestore';

export interface ContactInquiry {
    id?: string;
    name: string;
    email: string;
    phone: string;
    subject?: string;
    message: string;
    status: 'new' | 'read' | 'responded';
    createdAt?: any;
    updatedAt?: any;
}

class ContactService extends FirebaseService<ContactInquiry> {
    constructor() {
        super('contacts');
    }

    async submitContactForm(data: Omit<ContactInquiry, 'id' | 'status'>): Promise<string> {
        return this.create({
            ...data,
            status: 'new',
        });
    }

    async getAllInquiries(): Promise<ContactInquiry[]> {
        const constraints = [orderBy('createdAt', 'desc')];
        return this.getAll(constraints);
    }

    async updateInquiryStatus(id: string, status: 'new' | 'read' | 'responded'): Promise<void> {
        return this.update(id, { status });
    }

    async deleteInquiry(id: string): Promise<void> {
        return this.delete(id);
    }
}

export const contactService = new ContactService();
