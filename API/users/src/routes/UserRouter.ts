import express from 'express';
import UserController from '../controller/UserController';
const { ensureAuthenticated } = require('../auth/_helpers');

const UsersRouter = express.Router();

const userController = new UserController();

UsersRouter.post("/login", userController.login);
UsersRouter.post("/register", userController.register);
UsersRouter.get("/me", ensureAuthenticated, userController.userInfo)

export default UsersRouter;
