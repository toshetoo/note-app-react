import axios from 'axios';
import { API_URL } from './Constants';
import BaseAPI from './BaseAPI';

export default class UsersAPI {

  static getLoggedUser() {
    return BaseAPI.getUser();
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      BaseAPI.get(API_URL + '/users/getByProp').then((data) => {
        resolve(data);
      }).catch(BaseAPI.handleError);
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      BaseAPI.get(API_URL + '/users').then((data) => {
            resolve(data);
        }).catch(BaseAPI.handleError);
    });
  }

  static save(note) {
    return new Promise((resolve, reject) => {
      BaseAPI.post(API_URL + '/users', note).then((data) => {
        resolve(data);
      }).catch(BaseAPI.handleError);
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      BaseAPI.delete(API_URL + '/users/' + id).then(() => {
        resolve();
      }).catch(BaseAPI.handleError);
    });
  }
}
