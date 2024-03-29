import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import moment from 'moment';
import User from '../entity/User';

const daysForJwtToExpire = 14;

class EncryptionService {
  async comparePassword(
    formPassword: string,
    dbPassword: string,
  ): Promise<boolean> {
    try {
      return await bcrypt.compareSync(formPassword, dbPassword);
    } catch (e) {
      return false;
    }
  }

  async encodeToken(user: User): Promise<string> {
    const payload = {
      exp: moment().add(daysForJwtToExpire, 'days').unix(),
      iat: moment().unix(),
      sub: user.id,
      name: user.name,
    };
    return sign(payload, process.env.TOKEN_SECRET!);
  }
}

export default EncryptionService;
