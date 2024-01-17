import { Jwt } from "jsonwebtoken";
import User from "../../documents/src/entity/User";

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const moment = require('moment');

export class EncryptionService {
	async comparePass(formPassword: String, dbPassword: String) {
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
		const token = await jwt.encode(payload, process.env.TOKEN_SECRET);
		return token;
	}

	async decodeToken(token: Jwt) {
		const payload = await jwt.decode(token, process.env.TOKEN_SECRET);
		const now = moment().unix();
		if (now > payload.exp) return({error: true});
		else return(payload);
	}
}

module.exports = EncryptionService;