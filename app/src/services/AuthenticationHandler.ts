import { jwtDecode } from 'jwt-decode';
import JsonWebToken from '../models/JsonWebToken';

class AuthenticationHandler {
  private token: string | null;

  getToken() {
    return this.token;
  }

  constructor() {
    this.token = localStorage.getItem('token');
  }

  isLoggedIn() {
    if (!this.token) {
      return false;
    }
    return true;
  }

  getUserName(): string | null {
    if (!this.token) {
      return null;
    }

    return jwtDecode<JsonWebToken>(this.token).name;
  }

  logout() {
    localStorage.removeItem('token');
    this.token = null;
  }
}

export default AuthenticationHandler;
