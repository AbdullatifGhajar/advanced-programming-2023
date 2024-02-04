import express, { Router } from 'express';
import FilesController from '../controller/FilesController';

const FilesRouter: Router = express.Router();
const filesController: FilesController = new FilesController();

FilesRouter.post('/upload', filesController.upload);
FilesRouter.get('/:fileId', filesController.download);

export default FilesRouter;
