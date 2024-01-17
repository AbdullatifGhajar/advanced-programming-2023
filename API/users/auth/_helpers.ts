import {Request, Response} from "express";
import DB from '../../db/DB';
import { Jwt, JwtPayload } from "jsonwebtoken";
import {decodeToken} from "./local"
import User from "../../documents/src/entity/User";
import moment = require("moment");

let ensureAuthenticated = async (req: Request, res: Response, next: Function) => {
	if (!(req.headers && req.headers.authorization)) {
		return res.status(400).json({ status: 'Please log in' });
	}

    const db = await DB.getInstance();

    let token: String = req.headers.authorization.split(' ')[1]
	let payload: JwtPayload = decodeToken(token)

	let now = moment().unix()

	if(payload.exp == undefined || now > payload.exp) {
		return next()
	}

	const user: User | null = await db.getRepository(User)
            .createQueryBuilder("user")
            .where("user.id = :id", { id: payload.id })
            .getOne();

	return next()

	const options = {
		method: 'GET',
		uri: 'http://localhost:3000/users/user',
		json: true,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${req.headers.authorization.split(' ')[1]}`,
		},
	};
	return request(options)
		.then((response) => {
			req.user = response;
			return next();
		})
		.catch((err) => { return next(err); });
};