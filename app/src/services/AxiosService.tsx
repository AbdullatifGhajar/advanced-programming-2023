import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8081',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
})

export const apiAuth = axios.create({
    baseURL: 'http://localhost:8081',
})
