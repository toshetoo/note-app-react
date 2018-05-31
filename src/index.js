import React, { Component } from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/layout/main/Main";
import { Router } from "react-router-dom";
import history from './core/history/History';
import Header from "./components/layout/header/Header";
import storeConfig from './store/index';
import { Provider } from "react-redux";
import { loadNotes } from "./actions/notesActons";
import { loadUsers } from "./actions/usersActions";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const store = storeConfig();
store.dispatch(loadNotes());
store.dispatch(loadUsers());

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
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
