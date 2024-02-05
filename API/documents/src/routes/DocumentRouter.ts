import express from 'express';
import AuthenticationHandler from '../../../common/src/auth/AuthenticationHandler';
import DocumentController from '../controller/DocumentController';

const DocumentRouter = express.Router();

const documentController = new DocumentController();

DocumentRouter.get('/', AuthenticationHandler, documentController.documentList);
DocumentRouter.get('/:id', AuthenticationHandler, documentController.document);
DocumentRouter.post('/:id/edit', documentController.saveDocument);

export default DocumentRouter;
