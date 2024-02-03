import DB from '../../../db/DB';

import _ from 'lodash';
import { In } from 'typeorm';
import Document from '../../../documents/src/entity/Document';
import Student from '../../../users/src/entity/Student';
import Tutor from '../../../users/src/entity/Tutor';
import Approval from '../entity/Approval';

class ApprovalService {
  async approval(id: string): Promise<Approval> {
    const db = await DB.getInstance();
    const approval = await db.getRepository(Approval).findOne({
      where: {
        id: parseInt(id),
      },
    });

    if (!approval) {
      throw new Error('Approval not found');
    }

    return approval;
  }
  async saveApproval(approval: Approval) {
    const db = await DB.getInstance();
    await db
      .createQueryBuilder()
      .update(Approval)
      .set(approval)
      .where('id = :id', { id: approval.id })
      .execute();
  }
  async list(tutorId: number) {
    const db = await DB.getInstance();
    const tutor = await db.getRepository(Tutor).findOne({
      // loadRelationIds: true, // TODO: check if you can refactor this using loading
      relations: {
        approvals: {
          document: {
            student: true,
          },
        },
      },
      select: {
        id: true,
        approvals: {
          id: true,
          document: {
            id: true,
            student: {
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

    console.log(tutor);

    // get for every studentId the count of documents {"studentId": "documentCount"}
    const documentCountPerStudent = _.countBy(
      tutor.approvals,
      (approval) => approval.document.student.id,
    );

    // return the student info and documentCount
    const students = await db
      .getRepository(Student)
      .findBy({ id: In(Object.keys(documentCountPerStudent)) });
    return students.map((student) => {
      return {
        student: student,
        documentCount: documentCountPerStudent[student.id],
      };
    });
  }

  async documentsToApproveForStudent(tutorId: number, studentId: number) {
    const db = await DB.getInstance();
    const student = await db.getRepository(Student).findOne({
      where: {
        id: studentId,
      },
    });
    const documents = await db.getRepository(Document).find({
      relations: {
        fields: true,
      },
      where: {
        student: {
          id: studentId,
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
      student: student,
      documents: documents,
    };
  }
}

export default ApprovalService;
