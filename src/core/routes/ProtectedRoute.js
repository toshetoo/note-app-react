import React, { Component } from 'react';
import UsersAPI from '../../api/UserAPI';
import { Redirect } from 'react-router-dom'

export default class ProtectedRoute extends Component {

    render() {
        const isLoggedIn = UsersAPI.getLoggedUser() !== null;

        if(isLoggedIn) {
            return <this.props.component {...this.props} />
        } else {
            return <Redirect to={{
                pathname: '/login',
                state: { from: this.props.location }
              }} />
        }
    }
}