import { Request, Response } from 'express';
import FilesService from '../services/FilesService';

class FilesController {
    uploadFile(req: Request, res: Response) {
        let filesService = new FilesService();
        filesService.extractFileFromRequest(req, res)
            .then((fileId: string) => {
                res.json({fileId: fileId});
            })
            .catch((err: Error) => {
                res.status(500).send(err);
            });
    }

    downloadFile(req: Request, res: Response) {
        const filesService = new FilesService();
        res.sendFile(filesService.resolveFile(req.params.fileId));
    }
}

export default FilesController;
