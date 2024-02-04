import express from 'express';
import ApprovalController from '../controller/ApprovalController';

const ApprovalRouter = express.Router();

const approvalController = new ApprovalController();

ApprovalRouter.get('/students/', approvalController.approvalList);
ApprovalRouter.get('/students/:id', approvalController.approvalListForUser);
ApprovalRouter.get('/:id', approvalController.approval);
ApprovalRouter.post('/:id/edit', approvalController.saveApproval);

export default ApprovalRouter;
