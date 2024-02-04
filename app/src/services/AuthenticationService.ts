import User from '../models/User';

import Api from './Api';
import AuthenticationTokenHandler from './authentication/AuthenticationTokenHandler';

class AuthenticationService {
  private url = 'users';
  private api = new Api();
  private authenticationHandler = new AuthenticationTokenHandler();

  async login(email: string, password: string): Promise<void> {
    const response = await this.api.post(`${this.url}/login`, {
      email,
      password,
    });
    const jwt = response.data;
    this.authenticationHandler.setToken(jwt);
  }

  async register(name: string, email: string, password: string) {
    const response = await this.api.post(`${this.url}/register`, {
      name,
      email,
      password,
    });
    const jwt = response.data;
    this.authenticationHandler.setToken(jwt);
  }

  async userInfo(): Promise<User> {
    const response = await this.api.get(`${this.url}/me`);
    return response.data;
  }

  logout() {
    this.authenticationHandler.removeToken();
  }
}

export default AuthenticationService;
