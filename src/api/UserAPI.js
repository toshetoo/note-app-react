import axios from 'axios';
import { API_URL } from './Constants';
import BaseAPI from './BaseAPI';

export default class UsersAPI {

  static getById(id) {
    return new Promise((resolve, reject) => {
      BaseAPI.get(API_URL + '/users/getByProp').then((data) => {
        resolve(data);
      });
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      BaseAPI.get(API_URL + '/users/getAll').then((data) => {
            resolve(data);
        });
    });
  }

  static save(note) {
    return new Promise((resolve, reject) => {
      BaseAPI.post(API_URL + '/users', note).then((data) => {
        resolve(data);
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      BaseAPI.delete(API_URL + '/users/' + id).then(() => {
        resolve();
      });
    });
  }
}
