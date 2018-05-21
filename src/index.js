import React, { Component } from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/layout/main/Main";
import { Router } from "react-router-dom";
import history from './core/history/History';
import Header from "./components/layout/header/Header";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Header />
        <Main />
      </div>
    );
  }
}

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
