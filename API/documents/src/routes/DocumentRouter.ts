import express from 'express';
import DocumentController from '../controller/DocumentController';

const DocumentRouter = express.Router();

const documentController = new DocumentController();

DocumentRouter.get('/', documentController.documentList);
DocumentRouter.get('/:id', documentController.document);
DocumentRouter.post('/:id/edit', documentController.saveDocument);

export default DocumentRouter;
