import Document from '../entity/Document';
import DB from '../../../db/DB';
import Field from '../entity/Field';

class DocumentService {
  async list(): Promise<Document[]> {
    const db = await DB.getInstance();
    return await db.getRepository(Document).find({
      relations: {
        approvals: {
          tutor: true,
        },
      },
    });
  }

  async getDocumentById(id: string): Promise<Document | null> {
    const db = await DB.getInstance();
    return await db.getRepository(Document).findOne({
      where: {
        id: parseInt(id),
      },
      relations: {
        fields: true,
        approvals: {
          tutor: true,
        },
      },
    });
  }

  async document(id: string): Promise<Document> {
    const document = await this.getDocumentById(id);

    if (document === null) {
      throw new Error('Document not found');
    }

    return document;
  }

  async saveFields(updatedFields: Field[]): Promise<void> {
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
