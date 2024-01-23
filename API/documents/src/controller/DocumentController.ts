import { Request, Response } from 'express';
import DocumentService from '../services/DocumentService';

class DocumentController {
  async documentList(req: Request, res: Response) {
    const documentService = new DocumentService();
    const list = await documentService.list();
    console.log(list);
    return res.json(list);
  }

  async document(req: Request, res: Response) {
    const documentService = new DocumentService();
    try {
      const document = await documentService.document(req.params.id);
      console.log(document);
      return res.json(document);
    } catch (error: any) {
      return res.status(404).json({ error: error.message });
    }
  }

  async saveDocument(req: Request, res: Response) {
    const documentService = new DocumentService();
    try {
      await documentService.saveDocument(req.body);
      return res.json({ message: 'Document saved' });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default DocumentController;
