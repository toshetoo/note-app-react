import React, { Component } from "react";
import NoteModel from "./models/NoteModel";
import Loader from "../layout/Loader";
import NotesAPI from "../../api/NotesAPI";

export default class AddNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: new NoteModel("", ""),
      ready: true
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;

    if (id) {
      this.setState({
        ready: false
      });

      NotesAPI.getById(id).then(dbNote => {
        this.setState({
          note: dbNote,
          ready: true
        });
      });
    }
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

    NotesAPI.save(this.state.note).then(() => {
      this.setState({
        ready: true
      });

      this.props.history.push("/notes-list");
    });
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
                  value={this.state.note.title}
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
                  value={this.state.note.description}
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
