import { Request, Response } from 'express';
import User from '../../../users/src/entity/User';
import ApprovalService from '../services/ApprovalService';

class ApprovalController {
  async saveApproval(req: Request, res: Response) {
    const approvalService = new ApprovalService();
    try {
      await approvalService.saveApproval(req.body);
      // TODO: only accept if the user is the owner of the approval or admin
      return res.json({ message: 'Document saved' });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
  async approval(req: Request, res: Response) {
    const approvalService = new ApprovalService();
    try {
      return res.json(await approvalService.approval(req.params.id));
    } catch (error: any) {
      return res.status(404).json({ error: error.message });
    }
  }
  async approvalList(req: Request, res: Response) {
    const approvalService = new ApprovalService();
    const user: User = req.body.user;

    if (user.role !== 'tutor') {
      return res
        .status(401)
        .json({ status: 'Only tutors can perform this task}' });
    }
    const tutorId = user.id;
    return res.json(await approvalService.list(tutorId));
  }

  async approvalListForUser(req: Request, res: Response) {
    const approvalService = new ApprovalService();
    const user: User = req.body.user;

    if (user.role !== 'tutor') {
      return res
        .status(401)
        .json({ status: 'Only tutors can perform this task}' });
    }
    const tutorId = user.id;
    const studentId = parseInt(req.params.id);
    return res.json(
      await approvalService.documentsToApproveForStudent(tutorId, studentId),
    );
  }
}

export default ApprovalController;
