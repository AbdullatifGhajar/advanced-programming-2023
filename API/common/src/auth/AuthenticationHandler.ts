import { NextFunction, Request, Response } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import moment from 'moment';

import User from '../../../users/src/entity/User';
import UserService from '../../../users/src/services/UserService';

/* Ensures that user is authenticated when attached to a router 
and adds user to the request body */
const AuthenticationHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.headers?.authorization) {
    return res.status(401).json({ status: 'Please log in' });
  }

  const token: string = req.headers.authorization.split(' ')[1];
  const payload = verify(token, process.env.TOKEN_SECRET!) as JwtPayload;

  const now = moment().unix();
  if (!payload.exp || now > payload.exp) {
    return res.status(401).json({ status: 'Expired login token' });
  }

  const userId = parseInt(payload.sub!);
  const userService = new UserService();
  userService.user(userId).then((user: User) => {
    if (!user) {
      return res
        .status(401)
        .json({ status: 'Invalid authentication token. Log in again' });
    }

    req.body.user = user;
    next();
  });
};

export default AuthenticationHandler;
