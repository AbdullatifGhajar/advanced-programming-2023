import {Request, Response, NextFunction} from 'express'
import { JwtPayload } from 'jsonwebtoken';
import User from '../entity/User';
import DB from '../../../db/DB';
const jwt = require('jsonwebtoken');
const moment = require('moment');

let ensureAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
	if (!(req.headers && req.headers.authorization)) {
		return res.status(401).json({ status: 'Please log in' });
	}

    const token: String = req.headers.authorization.split(' ')[1]
    const payload: JwtPayload = jwt.verify(token, process.env.TOKEN_SECRET)

    const now = moment().unix()

    if(!payload.exp || now > payload.exp) {
        return res.status(401).json({ status: 'Expired login token' });
    }

    const db = await DB.getInstance();
    const user: User | null = await db.getRepository(User)
        .createQueryBuilder("user")
        .where("user.id = :id", { id: payload.sub })
        .getOne();

    if(!user) {
        return res.status(401).json({ status: 'Malformed login token' })
    }

    req.body.user = user;

	next()
};

module.exports = {
    ensureAuthenticated,
  };
  