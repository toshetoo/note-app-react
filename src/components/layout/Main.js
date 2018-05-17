import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NotesList from "../notes/NotesList";
import Home from "./Home";
import AddNote from "../notes/AddNote";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Verify from "../auth/Verify";

export default class Main extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Switch>          
          <Route exact path="/login" component={Login} />
          <Route exact path="/verify/:id" component={Verify} />
          <Route exact path="/register" component={Register} />

          <Route exact path="/home" component={Home} />
          <Route exact path="/notes-list" component={NotesList} />
          <Route exact path="/add-note" component={AddNote} />
          <Route exact path="/add-note/:id" component={AddNote} />

          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    );
  }
}
