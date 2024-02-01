import DB from '../../../db/DB';

import _ from 'lodash';
import User from '../../../users/src/entity/User';
import Tutor from '../../../users/src/entity/Tutor';
import { In } from 'typeorm';

class ApprovalService {
  async list(tutorId: number) {
    const db = await DB.getInstance();
    const tutor = await db.getRepository(Tutor).findOne({
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
}

export default ApprovalService;
