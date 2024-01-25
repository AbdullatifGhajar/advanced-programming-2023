import { api } from './AxiosService';
import DocumentModel from '../models/Document';
import { FieldModel } from '../models/Field';

class DocumentService {
  url: string = 'http://localhost:8081/documents';
  async getDocument(id: string | undefined): Promise<DocumentModel> {
    if (!id) {
      throw new Error('Document ID is undefined');
    }
    const response = await api.get(`/documents/${id}`);
    return response.data;
  }

  async saveFields(
    documentId: string,
    updatedFields: FieldModel[],
  ): Promise<void> {
    updatedFields.forEach((field) => {
      delete (field as { type?: unknown }).type; // remove type
    });
    await api.post(`/documents/${documentId}/edit`, updatedFields);
  }
}

export default DocumentService;
