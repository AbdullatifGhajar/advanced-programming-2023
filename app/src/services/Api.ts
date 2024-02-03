import axios, {
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import AuthenticationHandler from './authentication/AuthenticationHandler';

import { useNavigate } from 'react-router-dom';

class Api {
  private apiInstance = axios.create({
    baseURL: 'http://localhost:8081/',
  });

  private authHandler: AuthenticationHandler;

  constructor() {
    this.authHandler = new AuthenticationHandler();
    this.apiInstance.interceptors.request.use(
      (config: AxiosRequestConfig) =>
        this.handleRequest(config) as InternalAxiosRequestConfig,
      this.handleError,
    );
  }

  private handleRequest = (
    config: AxiosRequestConfig<any>,
  ): AxiosRequestConfig<any> => {
    if (this.authHandler.isLoggedIn()) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${this.authHandler.getToken()}`,
      };
    }

    return config;
  };

  private handleError = (error: AxiosError) => {
    if (error.response?.status === 401) {
      this.authHandler.logout();
      const navigate = useNavigate();
      navigate('/login');
    }
    return Promise.reject(error);
  };

  public get = (url: string) => this.apiInstance.get(url);
  public post = (url: string, data: any) => this.apiInstance.post(url, data);
}

export default Api;
