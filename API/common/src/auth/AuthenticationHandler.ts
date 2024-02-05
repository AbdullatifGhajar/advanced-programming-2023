import { NextFunction, Request, Response } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import moment from 'moment';
import DB from '../../../db/DB';
import User from '../../../users/src/entity/User';

/* Ensures that user is authenticated when attached to a router 
and adds user to the request body */
const AuthenticationHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(401).json({ status: 'Please log in' });
  }

  const token: string = req.headers.authorization.split(' ')[1];
  const payload = verify(token, process.env.TOKEN_SECRET!) as JwtPayload;

  const now = moment().unix();
  if (!payload.exp || now > payload.exp) {
    return res.status(401).json({ status: 'Expired login token' });
  }

  const db = await DB.getInstance();
  const user: User | null = await db
    .getRepository(User)
    .createQueryBuilder('user')
    .where('user.id = :id', { id: payload.sub })
    .getOne();

  if (!user) {
    return res.status(401).json({ status: 'Please login (again)' });
  }

  req.body.user = user;

  next();
};

export default AuthenticationHandler;