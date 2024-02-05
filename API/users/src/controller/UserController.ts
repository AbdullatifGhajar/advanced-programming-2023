import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  login(req: Request, res: Response) {
    const userService = new UserService();
    userService
      .login(req.body.email, req.body.password)
      .then((jwt) => res.json(jwt))
      .catch((error: any) => res.status(500).json({ error: error.message }));
  }

  register(req: Request, res: Response) {
    const userService = new UserService();
    userService
      .register(req.body.email, req.body.password, req.body.name)
      .then((jwt) => res.json(jwt))
      .catch((error: any) => res.status(500).json({ error: error.message }));
  }

  userInfo(req: Request, res: Response) {
    const userService = new UserService();
    const userInfo = userService.userInfo(req.body.user);
    res.json(userInfo);
  }
}

export default UserController;
