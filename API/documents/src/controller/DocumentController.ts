import { Request, Response } from 'express';
import DocumentService from '../services/DocumentService';

class DocumentController {
  async documentList(req: Request, res: Response) {
    const documentService = new DocumentService();
    return res.json(await documentService.list());
  }

  async document(req: Request, res: Response) {
    const documentService = new DocumentService();
    try {
      return res.json(await documentService.document(req.params.id));
    } catch (error: any) {
      return res.status(404).json({ error: error.message });
    }
  }

  async saveDocument(req: Request, res: Response) {
    const documentService = new DocumentService();
    try {
      await documentService.saveFields(req.body);
      return res.json({ message: 'Document saved' });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default DocumentController;
