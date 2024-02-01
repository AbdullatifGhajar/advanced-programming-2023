import express from 'express';
import ApprovalController from '../controller/ApprovalController';

const ApprovalRouter = express.Router();

const approvalController = new ApprovalController();

ApprovalRouter.get('/users/', approvalController.approvalList);
ApprovalRouter.get('/users/:id', approvalController.approvalListForUser);

export default ApprovalRouter;
