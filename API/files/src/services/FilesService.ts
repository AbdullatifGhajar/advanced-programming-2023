import multer, { Multer, StorageEngine } from 'multer';
import path from 'path';
import { Request, Response } from 'express';

class FilesService {
  private storage: StorageEngine;
  private upload: Multer;

  constructor() {
    // Set up multer
    this.storage = multer.diskStorage({
      destination: './uploads',
      filename: function (
        req: Request,
        file: Express.Multer.File,
        cb: (error: Error | null, filename: string) => void,
      ) {
        cb(null, Date.now() + path.extname(file.originalname));
      },
    });

    this.upload = multer({ storage: this.storage });
  }

  extractFileFromRequest(req: Request, res: Response): Promise<string> {
    return new Promise((resolve, reject) => {
      this.upload.single('file')(req, res, function (err: any) {
        if (err || !req.file) {
          reject(err.message);
        } else {
          resolve(req.file.filename);
        }
      });
    });
  }

  resolveFile(fileId: string): string {
    const file = `./uploads/${fileId}`;
    return path.resolve(file);
  }
}

export default FilesService;
