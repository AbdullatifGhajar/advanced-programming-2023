import { Request, Response } from 'express';
import ApprovalService from '../services/ApprovalService';

class ApprovalController {
  async approvalList(req: Request, res: Response) {
    const approvalService = new ApprovalService();
    const tutorId = parseInt(req.params.tutorId); // TODO: replace with authentication token
    return res.json(await approvalService.list(tutorId));
  }
}

export default ApprovalController;
