class AuthenticationTokenHandler {
  getToken() {
    return localStorage.getItem('token');
  }

  setToken(jwt: string) {
    localStorage.setItem('token', jwt);
  }

  hasToken() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    return true;
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}

export default AuthenticationTokenHandler;
