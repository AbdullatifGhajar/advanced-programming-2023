import Document from '../models/Document';
import DocumentOverview from '../models/DocumentOverview';

import Api from './Api';

class DocumentService {
  private url = 'documents';
  private api = new Api();

  async fetchDocument(id: string): Promise<Document> {
    const response = await this.api.get(`${this.url}/${id}`);
    return response.data;
  }

  async fetchDocumentOverview(): Promise<DocumentOverview[]> {
    const response = await this.api.get(this.url);
    return response.data;
  }

  async saveDocument(document: Document): Promise<void> {
    document.fields.forEach((field) => {
      delete (field as { type?: unknown }).type; // remove attribute 'type'
    });
    await this.api.post(`${this.url}/${document.id}/edit`, document.fields);
  }
}

export default DocumentService;
