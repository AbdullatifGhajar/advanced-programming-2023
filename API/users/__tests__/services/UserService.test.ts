import UserService from '../../src/services/UserService';
import DB from '../../../db/DB';
import MockDB from '../../../db/MockDB';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
    // Mock the database instance
    jest.spyOn(DB, 'getInstance').mockReturnValue(MockDB.getInstance());
  });

  describe('login', () => {
    it('should return a token when valid email and password are provided', async () => {
      const token = await userService.login('student@example.com', 'password');

      expect(token).toBeDefined();
      expect(typeof token).toBe('string');
    });
  });
});
