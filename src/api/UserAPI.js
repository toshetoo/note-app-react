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

  static save(user) {
    return new Promise((resolve, reject) => {
      if(!user._id) {
        BaseAPI.post(API_URL + '/users', user).then((data) => {
          resolve(data);
        }).catch(BaseAPI.handleError);
      } else {
        BaseAPI.put(API_URL + '/users/' + user._id, user).then((data) => {
          resolve(data);
        }).catch(BaseAPI.handleError);
      }      
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      BaseAPI.delete(API_URL + '/users/' + id).then(() => {
        resolve();
      }).catch(BaseAPI.handleError);
    });
  }

  static uploadProfilePicture(image) {
    return new Promise((resolve, reject) => {
      BaseAPI.uploadFile(API_URL + '/users/uploadImage', image).then((image) => {
        resolve(image);
      }).catch(BaseAPI.handleError);
    });
  }
}
