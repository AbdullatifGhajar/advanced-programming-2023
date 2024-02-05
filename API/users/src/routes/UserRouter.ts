import express from 'express';
import UserController from '../controller/UserController';

import AuthenticationHandler from '../../../common/src/auth/AuthenticationHandler';

const UsersRouter = express.Router();

const userController = new UserController();

UsersRouter.get('/me', AuthenticationHandler, userController.userInfo);

UsersRouter.post('/login', userController.login);
UsersRouter.post('/register', userController.register);

export default UsersRouter;
