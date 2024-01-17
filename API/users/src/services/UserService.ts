import User from '../entity/User';
import DB from '../../../db/DB';
import { Jwt } from 'jsonwebtoken';
import EncryptionService from './EncryptionService'
import bcrypt from "bcrypt";

class UserService {
    async login(email: string, password: string): Promise<Jwt> {
        const db = await DB.getInstance();

        const user: User | null = await db.getRepository(User)
        .createQueryBuilder("user")
        .where("user.email = :email", { email: email })
        .getOne();

        if (!user) {
            throw new Error("EMAIL_NOT_FOUND");
          }

        let encryptionService = new EncryptionService()
        let passwordMatch: boolean = await encryptionService.comparePassword(password, user.password);

        if (!passwordMatch) throw new Error("WRONG_PASSWORD");

        const jwtoken: Jwt = await encryptionService.encodeToken(user);

        return jwtoken;
    }

    async register(email: string, password: string, name: string): Promise<Jwt> {
        const db = await DB.getInstance();

        const user: User | null = await db.getRepository(User)
        .createQueryBuilder("user")
        .where("user.email = :email", { email: email })
        .getOne();

        if (user) {
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

        const createdUser: User | null = await db.getRepository(User)
            .createQueryBuilder("user")
            .where("user.email = :email", { email: email })
            .getOne();

        if (!createdUser) {
            throw new Error("FAILURE_DURING_CREATION_OF_USER")
        }

        let encryptionService = new EncryptionService()
        const jwtoken: Jwt = await encryptionService.encodeToken(createdUser);

        return jwtoken;
    }

    async userInfo(user: User) {
        return {id: user.id, name: user.name, email: user.email }
    }
}

export default UserService;