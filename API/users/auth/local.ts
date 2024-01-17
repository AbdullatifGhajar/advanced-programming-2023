import { Jwt, JwtPayload } from "jsonwebtoken";
import User from "../../documents/src/entity/User";

const moment = require('moment');
const jwt = require('jsonwebtoken');

function encodeToken(user: User): Jwt {
  const payload = {
    exp: moment().add(14, 'days').unix(),
    iat: moment().unix(),
    sub: user.id,
  };
  return jwt.encode(payload, process.env.TOKEN_SECRET);
}

export function decodeToken(token: Jwt|String): JwtPayload {
  const payload = jwt.decode(token, process.env.TOKEN_SECRET);
  return payload
}

module.exports = {
  encodeToken,
  decodeToken,
};
