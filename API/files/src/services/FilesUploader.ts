import multer from 'multer';
import { Request, Response } from 'express';

const destination = './uploads';

class FilesUploader {
  extractAndSaveFile(
    req: Request,
    res: Response,
    fileId: string,
  ): Promise<string> {
    const storage = multer.diskStorage({
      destination: destination,
      filename: (
        req: Request,
        file: Express.Multer.File,
        cb: (error: Error | null, filename: string) => void,
      ) => {
        cb(null, `${fileId}-${file.originalname}`);
      },
    });

    const uploadMiddleware = multer({ storage: storage }).single('file');

    return new Promise((resolve, reject) => {
      uploadMiddleware(req, res, function (err: any) {
        if (err || !req.file) {
          reject(err.message);
        } else {
          resolve(req.file.originalname);
        }
      });
    });
  }
}

export default FilesUploader;
