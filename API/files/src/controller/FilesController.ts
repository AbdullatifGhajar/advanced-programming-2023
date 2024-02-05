import { Request, Response } from 'express';
import FilesService from '../services/FilesService';

import File from '../entity/File';

class FilesController {
  upload(req: Request, res: Response) {
    const filesService = new FilesService();
    filesService
      .saveFileFromRequest(req, res)
      .then((file: File) => {
        res.json(file);
      })
      .catch((err: Error) => {
        res.status(500).send(err);
      });
  }

  download(req: Request, res: Response) {
    const filesService = new FilesService();
    filesService
      .downloadFile(req.params.fileId)
      .then((file) => {
        res.sendFile(file);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
}

export default FilesController;
