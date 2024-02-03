import { jwtDecode } from 'jwt-decode';
import JsonWebToken from '../../models/JsonWebToken';

class AuthenticationHandler {
  getToken() {
    return localStorage.getItem('token');
  }

  setToken(jwt: string) {
    localStorage.setItem('token', jwt);
  }

  isLoggedIn() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    return true;
  }

  getUserName(): string | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }

    return jwtDecode<JsonWebToken>(token).name;
  }

  logout() {
    localStorage.removeItem('token');
  }
}

export default AuthenticationHandler;
