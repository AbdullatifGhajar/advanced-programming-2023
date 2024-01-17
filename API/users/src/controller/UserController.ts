import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { Jwt } from 'jsonwebtoken';

class UserController {
    async login(req: Request, res: Response) {
        const userService = new UserService();
        try {
            const jwt: Jwt = await userService.login(
                req.body.email,
                req.body.password,
            );
            return res.json(jwt);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    async register(req: Request, res: Response) {
        const userService = new UserService();
        try {
            const jwt: Jwt = await userService.register(
                req.body.email,
                req.body.password,
                req.body.name
            );
            return res.json(jwt);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default UserController;
