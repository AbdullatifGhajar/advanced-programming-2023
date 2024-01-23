import axios from 'axios';
import Document from '../models/Document';
import Field from '../models/Field';

class DocumentService {
    url : string = 'http://localhost:8081/documents'
    async getDocument(id: string | undefined): Promise<Document> {
        if (!id) {
            throw new Error('Document ID is undefined');
        }
        const response = await axios.get(`${this.url}/${id}`);
        return response.data;
    }

    async saveDocument(id: string | undefined, updatedData: Field[]): Promise<void> {
        if (!id) {
            throw new Error('Document ID is undefined');
        }
        const response = await axios.post(`${this.url}/${id}/edit`, updatedData);
        return response.data;
    }
}

export default DocumentService;

