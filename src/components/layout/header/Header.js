import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthAPI from '../../../api/AuthAPI';
import { withRouter } from 'react-router-dom';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: localStorage.getItem('token') !== null
    };
  }

  logout() {
    AuthAPI.logout().then(() => {
      this.setState({
        isLogged: false
      });

      this.props.history.push('/login');      
    });
  }

  render() {
    return (
      <nav>
        <Link to="/home" className="text-left"> Home </Link>
        <Link to="/notes-list" className="text-left"> Notes </Link>
        <Link to="/add-note" className="text-left">Add note</Link>

        { this.state.isLogged ? <button onClick={this.logout.bind(this)} className="float-right"> Logout </button> : '' }
      </nav>
    );
  }
}

export default withRouter(Header);