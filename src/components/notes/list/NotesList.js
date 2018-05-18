import React, { Component } from "react";
import Note from "../single/Note";

import Loader from "../../layout/Loader";
import NotesAPI from '../../../api/NotesAPI';
import UsersAPI from '../../../api/UserAPI';
import './notes-list.css';

const styles = {
  "backgroundColor": "lightgray"
};


export default class NotesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      loggedUser: {},
      ready: false
    };
  }

  componentDidMount() {
    const loggedUser = UsersAPI.getLoggedUser();

    NotesAPI.getByAuthorId(loggedUser.id).then((dbNotes) => {
      this.setState({
        notes: dbNotes,
        loggedUser: loggedUser,
        ready: true
      });
    });
  }

  deleteNote(id) {
    this.setState({
      ready: false
    });

    NotesAPI.delete(id).then(() => {
      NotesAPI.getAll().then((dbNotes) => {
        this.setState({
          notes: dbNotes,
          ready: true
        });
      });
    });
  }

  render() {
    if (this.state.ready) {
      return (
        <div className="note-list-wrapper" style={styles}>
          <div>
            {this.state.notes.map(note => {
              return (
                <Note
                  key={note._id}
                  id={note._id}
                  title={note.title}
                  description={note.description}
                  creationDate={note.creationDate}
                  deleteNoteFunc={this.deleteNote.bind(this)}
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <Loader />
      );
    }
  }
}
