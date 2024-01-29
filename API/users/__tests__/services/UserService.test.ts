import UserService from '../../src/services/UserService';
import DB from '../../../db/DB';
import MockDB from '../../../db/MockDB';
import Student from '../../src/entity/Student';
import User from '../../src/entity/User';

describe('UserService', () => {
  let userService: UserService;

  beforeAll(async () => {
    userService = new UserService();
    // Mock the database instance
    jest.spyOn(DB, 'getInstance').mockReturnValue(MockDB.getInstance());
  });

  it('should return a token when valid email and password are provided', async () => {
    const token = await userService.login('student@example.com', 'password');

    expect(token).toBeDefined();
    expect(typeof token).toBe('string');
  });

  it('should return a token when a new user is registered with unique email, password, and name', async () => {
    const token = await userService.register(
      'newuser@example.com',
      'password',
      'New User',
    );

    expect(token).toBeDefined();
    expect(typeof token).toBe('string');
  });

  it('should return user info with valid role', async () => {
    const db = await DB.getInstance();
    const user = (await db
      .getRepository(Student)
      .createQueryBuilder('student')
      .getOne()) as User;

    const userInfo = userService.userInfo(user);

    expect(userInfo).toHaveProperty('name', 'John Student');
    expect(userInfo).toHaveProperty('email', 'student@example.com');
    expect(userInfo).toHaveProperty('role', 'student');
  });

  it('should throw an error if email is not found during login', async () => {
    await expect(
      userService.login('nonexistent@example.com', 'password'),
    ).rejects.toThrow('EMAIL_NOT_FOUND');
  });

  it('should throw an error if password is incorrect during login', async () => {
    await expect(
      userService.login('student@example.com', 'wrongpassword'),
    ).rejects.toThrow('WRONG_PASSWORD');
  });

  it('should throw an error if user already exists during registration', async () => {
    await expect(
      userService.register('student@example.com', 'password', 'Student'),
    ).rejects.toThrow('USER_ALREADY_EXISTS');
  });
});
