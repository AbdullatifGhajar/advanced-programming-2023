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

  async download(req: Request, res: Response) {
    const filesService = new FilesService();
    res.sendFile(await filesService.downloadFile(req.params.fileId));
  }
}

export default FilesController;
