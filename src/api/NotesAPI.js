import NoteModel from "../components/notes/models/NoteModel";
import axios from 'axios';
import { API_URL } from './Constants';
import BaseAPI from './BaseAPI';

export default class NotesAPI {

  static getById(id) {
    return new Promise((resolve, reject) => {
      BaseAPI.get(API_URL + '/notes/' + id).then((response) => {
        resolve(response.data);
      });
    });
  }

  static getByAuthorId(id) {
    return new Promise((resolve, reject) => {
      BaseAPI.get(API_URL + '/notes/getByAuthorId/' + id).then((response) => {
        resolve(response.data);
      });
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      BaseAPI.get(API_URL + '/notes').then((response) => {
            resolve(response.data);
        });
    });
  }

  static save(note) {
    return new Promise((resolve, reject) => {
      if(!note._id) {
        BaseAPI.post(API_URL + '/notes', note).then((response) => {
          resolve(response.data);
        });
      } else {
        BaseAPI.put(API_URL + '/notes/' + note._id, note).then((response) => {
          resolve(response.data);
        });
      }      
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      BaseAPI.delete(API_URL + '/notes/' + id).then((response) => {
        resolve();
      });
    });
  }
}
