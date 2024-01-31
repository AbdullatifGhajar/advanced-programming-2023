import Document from '../../../documents/src/entity/Document';
import DB from '../../../db/DB';

import _, { Dictionary } from 'lodash';

class ApprovalService {
  async list(tutorId: number): Promise<Dictionary<Document[]>> {
    const db = await DB.getInstance();
    const documents = await db
      .getRepository(Document)
      .createQueryBuilder('document')
      .where('approval.tutor.id = :tutorId', { tutorId })
      .leftJoinAndSelect('document.user', 'user')
      .leftJoinAndSelect('document.approvals', 'approval')
      // .groupBy('user.id') // doesn't work
      .getMany();
    return _.groupBy(documents, (document) => document.user.id);
  }
}

export default ApprovalService;
