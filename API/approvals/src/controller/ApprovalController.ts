import { Request, Response } from 'express';
import User from '../../../users/src/entity/User';
import ApprovalService from '../services/ApprovalService';

class ApprovalController {
  saveApproval(req: Request, res: Response) {
    const approvalService = new ApprovalService();
    approvalService
      .saveApproval(req.body)
      .then(() => {
        // TODO: only accept if the user is the owner of the approval or admin
        return res.json({ message: 'Document saved' });
      })
      .catch((error: any) => {
        console.log(error);
        return res.status(400).json({ error: error.message });
      });
  }
  approval(req: Request, res: Response) {
    const approvalService = new ApprovalService();
    approvalService
      .approval(parseInt(req.params.id))
      .then((result) => {
        return res.json(result);
      })
      .catch((error: any) => {
        return res.status(404).json({ error: error.message });
      });
  }
  approvalList(req: Request, res: Response) {
    const approvalService = new ApprovalService();
    const user: User = req.body.user;

    if (user.role !== 'tutor') {
      return res
        .status(401)
        .json({ status: 'Only tutors can perform this task}' });
    }
    const tutorId = user.id;
    approvalService
      .list(tutorId)
      .then((result) => {
        return res.json(result);
      })
      .catch((error: any) => {
        return res.status(500).json({ error: error.message });
      });
  }

  approvalListForUser(req: Request, res: Response) {
    const approvalService = new ApprovalService();
    const user: User = req.body.user;

    if (user.role !== 'tutor') {
      return res
        .status(401)
        .json({ status: 'Only tutors can perform this task}' });
    }
    const tutorId = user.id;
    const studentId = parseInt(req.params.id);
    approvalService
      .documentsToApproveForStudent(tutorId, studentId)
      .then((result) => {
        return res.json(result);
      })
      .catch((error: any) => {
        return res.status(500).json({ error: error.message });
      });
  }
}

export default ApprovalController;
