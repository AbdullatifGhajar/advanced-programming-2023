import path from 'path';
import { Request, Response } from 'express';
import FilesUploader from './FilesUploader';
import DB from '../../../db/DB';

import File from '../entity/File';

class FilesService {
  private uploader: FilesUploader;
  constructor() {
    this.uploader = new FilesUploader();
  }

  async saveFileFromRequest(req: Request, res: Response): Promise<string> {
    const db = await DB.getInstance();

    const filesRepository = db.manager.getRepository(File);
    const newFile = filesRepository.create({
      name: 'tmp',
    });
    await filesRepository.insert(newFile);
    console.log(newFile);

    // save file to disk
    this.uploader
      .extractAndSaveFile(req, res, newFile.id.toString())
      .then((name: string) => {
        newFile.name = name;
        filesRepository.save(newFile);
        console.log('File saved to disk:', name);
      })
      .catch((err: Error) => {
        console.log(err);
      });

    return newFile.id.toString();
  }

  async downloadFile(fileId: string) {
    const db = await DB.getInstance();
    const file = await db
      .getRepository(File)
      .createQueryBuilder('file')
      .where('file.id = :id', { id: fileId })
      .getOne();

    if (!file) {
      throw new Error('File not found');
    }

    return path.resolve(`./uploads/${file.path}`);
  }
}

export default FilesService;
