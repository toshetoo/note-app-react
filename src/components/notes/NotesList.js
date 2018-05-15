import React, { Component } from "react";
import Note from "./models/NoteModel";
import Loader from "../layout/Loader";

const styles = {
  "background-color": "lightgray"
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
    // NotesAPI.getAll().then(dbNotes => {
    //   this.setState({
    //     notes: dbNotes,
    //     ready: true
    //   });
    // });
  }

  deleteNote(id) {
    this.setState({
      ready: false
    });

    // NotesMockAPI.delete(id).then(() => {
    //   NotesMockAPI.getAll().then(dbNotes => {
    //     this.setState({
    //       notes: dbNotes
    //     });
    //   });
    // });
  }

  render() {
    if (this.state.ready) {
      return (
        <div className="note-list-wrapper" style={styles}>
          <div>
            {this.state.notes.map(note => {
              return (
                <Note
                  key={note.id}
                  id={note.id}
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
