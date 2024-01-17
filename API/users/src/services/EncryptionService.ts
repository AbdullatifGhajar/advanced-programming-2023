import { Jwt } from "jsonwebtoken";
import User from "../entity/User";

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');

export class EncryptionService {
	async comparePassword(formPassword: String, dbPassword: String) {
		try {
			const compare = await bcrypt.compareSync(formPassword, dbPassword);
			return compare;
		} catch (e) {
			return false;
		}
	}

	async encodeToken(user: User) {
		const payload = {
			exp: moment().add(14, 'days').unix(),
			iat: moment().unix(),
			sub: user.id,
		};
		const token = await jwt.sign(payload, process.env.TOKEN_SECRET);
		return token;
	}

	async decodeToken(token: Jwt) {
		const payload = await jwt.verify(token, process.env.TOKEN_SECRET);
		const now = moment().unix();
		if (now > payload.exp) return({error: true});
		else return(payload);
	}
}

export default EncryptionService;