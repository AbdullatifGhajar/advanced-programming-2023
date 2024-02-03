import { Request, Response } from 'express';
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
