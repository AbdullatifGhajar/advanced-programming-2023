import express from 'express';
import UserController from '../controller/UserController';

import AuthenticationHandler from '../auth/AuthenticationHandler';

const UsersRouter = express.Router();

const userController = new UserController();

UsersRouter.get("/me", AuthenticationHandler, userController.userInfo)

export default UsersRouter;
