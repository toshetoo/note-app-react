import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav>
        <Link to="/home"> Home </Link>
        <Link to="/notes-list"> Notes </Link>
        <Link to="/add-note">Add note</Link>
      </nav>
    );
  }
}
