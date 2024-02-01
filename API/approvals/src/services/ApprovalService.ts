import DB from '../../../db/DB';

import _ from 'lodash';
import { In } from 'typeorm';
import Document from '../../../documents/src/entity/Document';
import Tutor from '../../../users/src/entity/Tutor';
import User from '../../../users/src/entity/User';

class ApprovalService {
  async list(tutorId: number) {
    const db = await DB.getInstance();
    const tutor = await db.getRepository(Tutor).findOne({
      // loadRelationIds: true, // TODO: check if you can refactor this using loading
      relations: {
        approvals: {
          document: {
            user: true,
          },
        },
      },
      select: {
        id: true,
        approvals: {
          id: true,
          document: {
            id: true,
            user: {
              id: true,
            },
          },
        },
      },
      where: {
        id: tutorId,
        approvals: {
          isGiven: false,
        },
      },
    });

    if (!tutor) {
      throw new Error('Tutor not found');
    }

    // get for every userId the count of documents {"userId": "documentCount"}
    const documentCountPerUser = _.countBy(
      tutor.approvals,
      (approval) => approval.document.user.id,
    );

    // return the user info and documentCount
    const users = await db
      .getRepository(User)
      .findBy({ id: In(Object.keys(documentCountPerUser)) });
    return users.map((user) => {
      return {
        user: user,
        documentCount: documentCountPerUser[user.id],
      };
    });
  }

  async listForUser(tutorId: number, userId: number) {
    const db = await DB.getInstance();
    const user = await db.getRepository(User).findOne({
      where: {
        id: userId,
      },
    });
    const documents = await db.getRepository(Document).find({
      relations: {
        fields: true,
      },
      where: {
        user: {
          id: userId,
        },
        approvals: {
          tutor: {
            id: tutorId,
          },
          isGiven: false,
        },
      },
    });

    return {
      user: user,
      documents: documents,
    };
  }
}

export default ApprovalService;
