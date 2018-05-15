export default class NoteModel {
    constructor(title, descr, id) {
      this.id = id || null;
      this.title = title;
      this.description = descr;
      this.creationDate = new Date().toString();
    }
  }
  