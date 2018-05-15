import NoteModel from "../components/notes/models/NoteModel";
import axios from 'axios';
import { API_URL } from './Constants';

export default class NotesAPI {

  static getById(id) {
    return new Promise((resolve, reject) => {
      axios.get(API_URL + '/notes/getById/' + id).then((data) => {
        resolve(data);
      });
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
        axios.get(API_URL + '/notes/getAll').then((data) => {
            resolve(data);
        });
    });
  }

  static save(note) {
    return new Promise((resolve, reject) => {
      axios.post(API_URL + '/notes/save', note).then((data) => {
        resolve(data);
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      axios.delete(API_URL + '/notes/' + id).then(() => {
        resolve();
      });
    });
  }
}
