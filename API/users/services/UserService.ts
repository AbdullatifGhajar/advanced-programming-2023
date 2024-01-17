import User from '../../entity/User';
import DB from '../../../db/DB';
import { Jwt } from 'jsonwebtoken';
import {EncryptionService} from './EncryptionService'
const bcrypt = require("bcrypt")

class UserService {
    async login(email: String, password: String): Promise<Jwt> {
        const db = await DB.getInstance();

        const user: User | null = await db.getRepository(User)
        .createQueryBuilder("user")
        .where("user.email = :email", { email: email })
        .getOne();

        if (!user) {
            throw new Error("EMAIL_NOT_FOUND");
          }

        let encryptionService = new EncryptionService()
        let passwordMatch: boolean = await encryptionService.comparePass(password, user.password);

        if (!passwordMatch) throw new Error("WRONG_PASSWORD");

        const jwtoken: Jwt = await encryptionService.encodeToken(user);

        return jwtoken;
    }

    async register(email: String, password: String, name: String): Promise<Jwt> {
        const db = await DB.getInstance();

        const user: User | null = await db.getRepository(User)
        .createQueryBuilder("user")
        .where("user.email = :email", { email: email })
        .getOne();

        if (!user) {
            throw new Error("USER_ALREADY_EXISTS");
        }

        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);

        await db.createQueryBuilder()
            .insert()
            .into(User)
            .values([
                { email: email, name: name, password: hash },
            ])
            .execute()

        let encryptionService = new EncryptionService()
        const jwtoken: Jwt = await encryptionService.encodeToken(user);

        return jwtoken;
    }
}

export default UserService;