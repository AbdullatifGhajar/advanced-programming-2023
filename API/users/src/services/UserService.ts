import DB from '../../../db/DB';
import User from '../entity/User';

import Student from '../entity/Student';
import EncryptionService from './EncryptionService';

class UserService {
  private encryptionService: EncryptionService;

  constructor() {
    this.encryptionService = new EncryptionService();
  }

  async login(email: string, password: string): Promise<string> {
    const db = await DB.getInstance();

    const user = await db
      .getRepository(User)
      .createQueryBuilder('user')
      .where('user.email = :email', { email: email })
      .getOne();

    if (!user) throw new Error('EMAIL_NOT_FOUND');

    const passwordMatch = await this.encryptionService.comparePassword(
      password,
      user.password,
    );
    if (!passwordMatch) throw new Error('WRONG_PASSWORD');

    const jwt = await this.encryptionService.encodeToken(user);
    return jwt;
  }

  async register(
    email: string,
    password: string,
    name: string,
  ): Promise<string> {
    const db = await DB.getInstance();

    const user = await db
      .getRepository(User)
      .createQueryBuilder('user')
      .where('user.email = :email', { email: email })
      .getOne();

    if (user) {
      throw new Error('USER_ALREADY_EXISTS');
    }

    const newUser = await db.manager.save(Student, {
      name: name,
      email: email,
      password: password,
    });
    const jwt = await this.encryptionService.encodeToken(newUser);
    return jwt;
  }

  userInfo(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
  }
}

export default UserService;
