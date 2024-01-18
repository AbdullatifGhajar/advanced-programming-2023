import express from 'express';
import { Router } from 'express';
import FilesController from '../controller/FilesController';

const FilesRouter: Router = express.Router();
const filesController: FilesController = new FilesController();

FilesRouter.post('/upload', filesController.uploadFile);
FilesRouter.get('/:fileId', filesController.downloadFile);

export default FilesRouter;
