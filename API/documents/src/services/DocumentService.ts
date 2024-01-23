import Document from '../entity/Document';
import DB from '../../../db/DB';
import Field from '../entity/Field';

class DocumentService {
  async list(): Promise<Document[]> {
    const db = await DB.getInstance();
    return await db.manager.find(Document);
  }

  async getDocumentById(id: string): Promise<Document | null> {
    const db = await DB.getInstance();
    return await db
      .getRepository(Document)
      .createQueryBuilder('document')
      .leftJoinAndSelect('document.fields', 'fields')
      .where('document.id = :id', { id: id })
      .getOne();
  }

  async document(id: string): Promise<Document> {
    const document = await this.getDocumentById(id);

    if (document === null) {
      throw new Error('Document not found');
    }

    return document;
  }

  async saveDocument(updatedFields: Field[]): Promise<void> {
    const db = await DB.getInstance();
    for (const field of updatedFields) {
      await db
        .createQueryBuilder()
        .update(Field)
        .set(field)
        .where('id = :id', { id: field.id })
        .execute();
    }
  }
}

export default DocumentService;
