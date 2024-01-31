import axios from 'axios';
import DocumentModel from '../models/Document';

class DocumentService {
  url: string = 'http://localhost:8081/documents';
  async getDocument(id: string | undefined): Promise<DocumentModel> {
    if (!id) {
      throw new Error('Document ID is undefined');
    }
    const response = await axios.get(`${this.url}/${id}`);
    return response.data;
  }

  async saveDocument(document: DocumentModel): Promise<void> {
    document.fields.forEach((field) => {
      delete (field as { type?: unknown }).type; // remove attribute 'type'
    });
    await axios.post(`${this.url}/${document.id}/edit`, document.fields);
  }
}

export default DocumentService;
