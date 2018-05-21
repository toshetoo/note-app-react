import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NotesList from "../../notes/list/NotesList";
import Home from "../Home";
import AddNote from "../../notes/add-note/AddNote";
import Login from "../../auth/login/Login";
import Register from "../../auth/register/Register";
import Verify from "../../auth/verify/Verify";

import UsersList from '../../user/list/UsersList';
import UserProfile from '../../user/profile/UserProfile';

import ProtectedRoute from '../../../core/routes/ProtectedRoute';

import './main.css';

export default class Main extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Switch>          
          <Route exact path="/login" component={Login} />
          <Route exact path="/verify/:id" component={Verify} />
          <Route exact path="/register" component={Register} />

          <ProtectedRoute path="/home" component={Home} />
          <ProtectedRoute path="/notes-list" component={NotesList} />
          <ProtectedRoute path="/add-note" component={AddNote} />
          <ProtectedRoute path="/add-note/:id" component={AddNote} />

          <ProtectedRoute path="/user-profile/:id" component={UserProfile} />
          <ProtectedRoute path="/users-list" component={UsersList} />

          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    );
  }
}
