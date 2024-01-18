import Document from '../entity/Document';
import DB from '../../../db/DB';

class DocumentService {
  async list(): Promise<Document[]> {
    const db = await DB.getInstance();
    return await db.manager.find(Document);
  }

  async document(id: string): Promise<Document> {
    const db = await DB.getInstance();
    const document: Document | null = await db
      .getRepository(Document)
      .createQueryBuilder('document')
      .leftJoinAndSelect('document.fields', 'fields')
      .where('document.id = :id', { id: id })
      .getOne();

    if (document === null) {
      throw new Error('Document not found');
    }

    return document;
  }
}

export default DocumentService;
