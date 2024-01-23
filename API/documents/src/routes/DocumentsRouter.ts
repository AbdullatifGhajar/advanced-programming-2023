import express from 'express';
import DocumentController from '../controller/DocumentController';

const DocumentsRouter = express.Router();

const documentController = new DocumentController();

DocumentsRouter.get('/', documentController.documentList);
DocumentsRouter.get('/:id', documentController.document);
DocumentsRouter.post('/:id/edit',documentController.saveDocument);

export default DocumentsRouter;
