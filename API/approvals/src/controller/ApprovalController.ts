import { Request, Response } from 'express';
import ApprovalService from '../services/ApprovalService';

class ApprovalController {
  async approvalList(req: Request, res: Response) {
    const approvalService = new ApprovalService();
    const tutorId = parseInt('42'); // TODO: replace with authentication token
    return res.json(await approvalService.list(tutorId));
  }

  async approvalListForUser(req: Request, res: Response) {
    const approvalService = new ApprovalService();
    const tutorId = parseInt('42'); // TODO: replace with authentication token
    const userId = parseInt(req.params.id);
    return res.json(
      await approvalService.documentsToApproveForStudent(tutorId, userId),
    );
  }
}

export default ApprovalController;
