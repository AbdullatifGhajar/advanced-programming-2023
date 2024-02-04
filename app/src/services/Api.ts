import axios, {
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import AuthenticationTokenHandler from './authentication/AuthenticationTokenHandler';

import { useNavigate } from 'react-router-dom';

class Api {
  private apiInstance = axios.create({
    baseURL: 'http://localhost:8081/',
  });

  private authHandler: AuthenticationTokenHandler;

  constructor() {
    this.authHandler = new AuthenticationTokenHandler();
    this.apiInstance.interceptors.request.use(
      (config: AxiosRequestConfig) =>
        this.handleRequest(config) as InternalAxiosRequestConfig,
      this.handleError,
    );
  }

  private handleRequest = (
    config: AxiosRequestConfig<any>,
  ): AxiosRequestConfig<any> => {
    if (this.authHandler.hasToken()) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${this.authHandler.getToken()}`,
      };
    }

    return config;
  };

  private handleError = (error: AxiosError) => {
    if (error.response?.status === 401) {
      this.authHandler.removeToken();
      const navigate = useNavigate();
      navigate('/login');
    }
    return Promise.reject(error);
  };

  public get = (url: string) => this.apiInstance.get(url);
  public post = (url: string, data: any) => this.apiInstance.post(url, data);
}

export default Api;
