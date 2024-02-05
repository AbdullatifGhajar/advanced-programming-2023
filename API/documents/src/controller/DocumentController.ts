import { Request, Response } from 'express';
import DocumentService from '../services/DocumentService';

class DocumentController {
  documentList(req: Request, res: Response) {
    const documentService = new DocumentService();
    documentService
      .list()
      .then((result) => res.json(result))
      .catch((error) => res.status(500).json({ error: error.message }));
  }

  document(req: Request, res: Response) {
    const documentService = new DocumentService();
    documentService
      .document(req.params.id)
      .then((result) => res.json(result))
      .catch((error) => res.status(404).json({ error: error.message }));
  }

  saveDocument(req: Request, res: Response) {
    const documentService = new DocumentService();
    documentService
      .saveFields(req.body)
      .then(() => res.json({ message: 'Document saved' }))
      .catch((error) => res.status(400).json({ error: error.message }));
  }
}

export default DocumentController;
