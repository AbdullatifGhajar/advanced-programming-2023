import { Request, Response } from 'express';
import DocumentService from '../services/DocumentService';

class DocumentController {
	async documentList(req: Request, res: Response) {
        const documentService = new DocumentService();
        const list = await documentService.list()
        console.log(list)
        return res.json(list)
    }

    async document(req: Request, res: Response) {
        const documentService = new DocumentService();
        const document = await documentService.document(req.params.id);
        console.log(document)
        return res.json(document)
    }
}

export default DocumentController;
