import React, { Component } from "react";
import { connect } from 'react-redux';
import NoteModel from "./../models/NoteModel";
import Loader from "../../layout/Loader";
import NotesAPI from "../../../api/NotesAPI";
import { addNote } from '../../../actions/notesActons';

class AddNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: new NoteModel("", ""),
      ready: true
    };
  }

  onPropChange(event) {
    event.persist();
    this.setState({
      note: { ...this.state.note, [event.target.name]: event.target.value }
    });
  }

  onSave(event) {
    event.preventDefault();
    
    if (this.state.note.title === "" || this.state.note.description === "") {
      return;
    }

    this.setState({
      ready: false
    });

    this.props.dispatch(addNote(this.state.note));
  }

  render() {
    if (!this.state.ready) {
      return (
        <Loader />
      );
    }

    return (
      <div className="add-note-form">
        <form onSubmit={this.onSave.bind(this)}>
          <div className="row">
            <div className="col-xs-12">
              <div className="form-group">
                <label>Title: </label>
                <input
                  className="form-control"
                  name="title"
                  value={this.props.note.title}
                  onChange={this.onPropChange.bind(this)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="form-group">
                <label>Description: </label>
                <input
                  className="form-control"
                  name="description"
                  value={this.props.note.description}
                  onChange={this.onPropChange.bind(this)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <button type="submit">Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.computedMatch.params.id;
  return {
    note: id ? state.notesReducer.notes.find(n => n._id === id) : {}
  };
}

export default connect(mapStateToProps)(AddNote);
