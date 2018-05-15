import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NoteList from "../notes/NotesList";
import Home from "./Home";
import AddNote from "../notes/AddNote";

export default class Main extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/notes-list" component={NoteList} />
          <Route exact path="/add-note" component={AddNote} />
          <Route exact path="/add-note/:id" component={AddNote} />
        </Switch>
      </div>
    );
  }
}
