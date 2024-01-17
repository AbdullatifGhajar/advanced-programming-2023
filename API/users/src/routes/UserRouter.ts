import express from 'express';
import UserController from '../controller/UserController';

const UsersRouter = express.Router();

const userController = new UserController();

UsersRouter.get("/login", userController.login);
UsersRouter.post("/register", userController.register);

export default UsersRouter;
