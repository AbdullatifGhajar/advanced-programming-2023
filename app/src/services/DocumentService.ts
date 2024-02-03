import Document from '../models/Document';

import Api from './Api';

class DocumentService {
  private url = 'documents';
  private api = new Api();

  async getDocument(id: string | undefined): Promise<Document> {
    if (!id) {
      throw new Error('Document ID is undefined');
    }
    const response = await this.api.get(`${this.url}/${id}`);
    return response.data as Document;
  }

  async saveDocument(document: Document): Promise<void> {
    document.fields.forEach((field) => {
      delete (field as { type?: unknown }).type; // remove attribute 'type'
    });
    await this.api.post(`${this.url}/${document.id}/edit`, document.fields);
  }
}

export default DocumentService;
