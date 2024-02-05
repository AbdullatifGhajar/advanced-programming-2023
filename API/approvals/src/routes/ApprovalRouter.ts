import express from 'express';
import ApprovalController from '../controller/ApprovalController';

import AuthenticationHandler from '../../../common/src/auth/AuthenticationHandler';

const ApprovalRouter = express.Router();

const approvalController = new ApprovalController();

ApprovalRouter.get(
  '/students/',
  AuthenticationHandler,
  approvalController.approvalList,
);
ApprovalRouter.get(
  '/students/:id',
  AuthenticationHandler,
  approvalController.approvalListForUser,
);
ApprovalRouter.get('/:id', AuthenticationHandler, approvalController.approval);
ApprovalRouter.post('/:id/edit', approvalController.saveApproval);

export default ApprovalRouter;
