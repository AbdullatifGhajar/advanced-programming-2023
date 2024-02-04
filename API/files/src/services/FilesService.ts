import { Request, Response } from 'express';
import path from 'path';
import DB from '../../../db/DB';
import FilesUploader from './FilesUploader';

import File from '../entity/File';

class FilesService {
  private uploader: FilesUploader;
  constructor() {
    this.uploader = new FilesUploader();
  }

  async saveFileFromRequest(req: Request, res: Response): Promise<File> {
    const db = await DB.getInstance();

    const filesRepository = db.manager.getRepository(File);
    const newFile = filesRepository.create({
      name: 'tmp',
    });
    await filesRepository.insert(newFile);
    console.log(newFile);

    // save file to disk
    const filename = await this.uploader.extractAndSaveFile(
      req,
      res,
      newFile.id.toString(),
    );

    newFile.name = filename;
    filesRepository.save(newFile);
    console.log('File saved to disk:', filename);

    return newFile;
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
