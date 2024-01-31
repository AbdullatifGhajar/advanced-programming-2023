import express from 'express';
import ApprovalController from '../controller/ApprovalController';

const ApprovalRouter = express.Router();

const approvalController = new ApprovalController();

ApprovalRouter.get('/:tutorId', approvalController.approvalList);

export default ApprovalRouter;
