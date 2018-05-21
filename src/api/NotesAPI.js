import NoteModel from "../components/notes/models/NoteModel";
import axios from 'axios';
import { API_URL } from './Constants';
import BaseAPI from './BaseAPI';

export default class NotesAPI {

  static getById(id) {
    return new Promise((resolve, reject) => {
      BaseAPI.get(API_URL + '/notes/' + id).then((response) => {
        resolve(response.data);
      }).catch(BaseAPI.handleError);
    });
  }

  static getByAuthorId(id) {
    return new Promise((resolve, reject) => {
      BaseAPI.get(API_URL + '/notes/getByAuthorId/' + id).then((response) => {
        resolve(response.data);
      }).catch(BaseAPI.handleError);
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      BaseAPI.get(API_URL + '/notes').then((response) => {
            resolve(response.data);
        }).catch(BaseAPI.handleError);
    });
  }

  static save(note) {
    return new Promise((resolve, reject) => {
      if(!note._id) {
        BaseAPI.post(API_URL + '/notes', note).then((response) => {
          resolve(response.data);
        }).catch(BaseAPI.handleError);
      } else {
        BaseAPI.put(API_URL + '/notes/' + note._id, note).then((response) => {
          resolve(response.data);
        }).catch(BaseAPI.handleError);
      }      
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      BaseAPI.delete(API_URL + '/notes/' + id).then((response) => {
        resolve();
      }).catch(BaseAPI.handleError);
    });
  }
}
