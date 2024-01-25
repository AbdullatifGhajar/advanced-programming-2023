import axios from 'axios';
import JsonWebToken from '../models/JsonWebToken';

axios.defaults.baseURL = 'http://localhost:8081';
if (localStorage.getItem('token')) {
  axios.defaults.headers.common['Authorization'] =
    'Bearer ' + localStorage.getItem('token');
}

export function setToken(token: JsonWebToken) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

export const api = axios;
