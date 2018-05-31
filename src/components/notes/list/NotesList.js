import React, { Component } from "react";
import { connect } from 'react-redux';
import Note from "../single/Note";

import Loader from "../../layout/Loader";
import NotesAPI from '../../../api/NotesAPI';
import UsersAPI from '../../../api/UserAPI';
import './notes-list.css';
import { loadNotes, deleteNote } from "../../../actions/notesActons";

const styles = {
  "backgroundColor": "lightgray"
};

const mapStateToProps = (state, props) => {
  const authorId = UsersAPI.getLoggedUser().id;
  return {
    notes: state.notesReducer.notes && state.notesReducer.notes.filter(n => n.authorId === authorId)
  }
}

class NotesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedUser: {},
      ready: true
    };
  }

  deleteNote(id) {
    this.setState({
      ready: false
    });

    this.props.dispatch(deleteNote(id, () => {
      this.setState({
          ready: true
        });
    }));
  }

  render() {
    if (this.state.ready) {
      return (
        <div className="note-list-wrapper" style={styles}>
          <div>
            {this.props.notes && this.props.notes.map(note => {
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

export default connect(mapStateToProps)(NotesList);