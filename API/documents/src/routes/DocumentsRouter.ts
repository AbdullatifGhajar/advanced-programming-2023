import express from 'express';
import DocumentController from '../controller/DocumentController';
import AuthenticationHandler from '../../../users/src/auth/AuthenticationHandler';

const DocumentsRouter = express.Router();

const documentController = new DocumentController();

DocumentsRouter.get('/', AuthenticationHandler, documentController.documentList);
DocumentsRouter.get('/:id', AuthenticationHandler, documentController.document);
DocumentsRouter.post('/:id/edit', AuthenticationHandler, documentController.saveDocument);

export default DocumentsRouter;
