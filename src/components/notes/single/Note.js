import React, { Component } from "react";
import "./note.css";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Note extends Component {
  constructor(props) {
    super(props);
  }

  deleteNote() {
    this.props.deleteNoteFunc(this.props.id);
  }

  editNote() {
    this.props.history.push("/add-note/" + this.props.id);
  }

  render() {
    return (
      <div className="note-holder">
        <span className="delete-icon" onClick={this.editNote.bind(this)}>
          E
        </span>
        <span className="delete-icon" onClick={this.deleteNote.bind(this)}>
          X
        </span>
        <div className="note-title">
          <span className="key">Title: </span>
          {this.props.title}
        </div>
        <hr />
        <div className="note-description">
          <span className="key">Description: </span>
          {this.props.description}
        </div>
        <hr />
        <div className="note-creation-date">
          <span className="key">Creation Date:</span>
          {this.props.creationDate}
        </div>
      </div>
    );
  }
}

export default withRouter(Note);

Note.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  deleteNoteFunc: PropTypes.func.isRequired
};
