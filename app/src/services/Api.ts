import axios, {
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import AuthenticationHandler from './AuthenticationHandler';

class Api {
  private apiInstance = axios.create({
    baseURL: 'http://localhost:8081/',
  });

  private authHandler: AuthenticationHandler;

  constructor(authHandler: AuthenticationHandler) {
    this.authHandler = authHandler;
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
        Authorization: `Bearer ${this.authHandler.getToken()} {
                }`,
      };
    }

    return config;
  };

  private handleError = (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Unauthorized
      // this.authHandler.redirect();
      // TODO: redirect
    }

    return Promise.reject(error);
  };

  public get = (url: string) => this.apiInstance.get(url);
  public post = (url: string, data: any) => this.apiInstance.post(url, data);
}

export default Api;
