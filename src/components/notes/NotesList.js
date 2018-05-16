import React, { Component } from "react";
import Note from "./Note";

import Loader from "../layout/Loader";
import NotesAPI from '../../api/NotesAPI';

const styles = {
  "backgroundColor": "lightgray"
};

export default class NotesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      ready: false
    };
  }

  componentDidMount() {
    NotesAPI.getAll().then((dbNotes) => {
      this.setState({
        notes: dbNotes,
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
