import axios from 'axios';
import { API_URL } from './Constants';

export default class AuthAPI {
    static login(user) {
        return new Promise((resolve, reject) => {
            axios.post(API_URL + '/auth/login', user).then((response) => {
                localStorage.setItem('token', response.data.token);
                resolve(response.data);
            });
        });
    }

    static logout() {
        return new Promise((resolve, reject) => {
            localStorage.removeItem('token');
            resolve();
        });
    }

    static register(user) {
        return new Promise((resolve, reject) => {
            axios.post(API_URL + '/auth/register', user).then((data) => {
                resolve(data);
            });
        });
    }

    static verify(userData) {
        return new Promise((resolve, reject) => {
            axios.post(API_URL + '/auth/register', userData).then((data) => {
                resolve(data);
            });
        });
    }
}