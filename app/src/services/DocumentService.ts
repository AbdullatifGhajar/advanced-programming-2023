import axios from 'axios';
import Document from '../models/Document';
import { Field } from '../models/Field';

class DocumentService {
  url: string = 'http://localhost:8081/documents';
  async getDocument(id: string | undefined): Promise<Document> {
    if (!id) {
      throw new Error('Document ID is undefined');
    }
    const response = await axios.get(`${this.url}/${id}`);
    return response.data;
  }

  async saveFields(documentId: string, updatedFields: Field[]): Promise<void> {
    updatedFields.forEach((field) => {
      delete (field as { type?: unknown }).type; // remove type
    });
    await axios.post(`${this.url}/${documentId}/edit`, updatedFields);
  }
}

export default DocumentService;
