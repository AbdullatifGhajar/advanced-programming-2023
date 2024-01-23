import { NavigateFunction } from 'react-router';
import JsonWebToken from '../models/JsonWebToken';
import { jwtDecode } from 'jwt-decode';

class AuthenticationHandler {
  private navigate: NavigateFunction;
  private token: string | null;

  constructor(navigate: NavigateFunction) {
    this.navigate = navigate;
    this.token = localStorage.getItem('token');
  }

  isLoggedIn() {
    if (!this.token) {
      return false;
    }
    return true;
  }

  redirect() {
    this.navigate('/login', { state: { origin: window.location.pathname } });
  }

  getUserName() {
    if (!this.token) {
      return '';
    }
    return jwtDecode<JsonWebToken>(this.token).name;
  }
}

export default AuthenticationHandler;
