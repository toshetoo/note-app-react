import React, { Component } from 'react';
import AuthAPI from '../../../api/AuthAPI';
import './login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    onChange(event) {
        event.persist();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        AuthAPI.login(this.state).then(() => {
            this.props.history.push('/notes-list');
        });
    }

    render() {
        return (
            <div className="login-wrapper mt-5">                
                <div className="row form-row">
                    <div className="col-12 logo-holder">
                        <img src="assets/images/notes_logo.png" />
                    </div>    
                    <div className="col-12">
                        <h2>Login</h2>
                    </div>
                    <div className="offset-4 col-4">                                        
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <div className="form-group">
                                <label for="email">Email:</label>
                                <input type="email" name="email" id="email" className="form-control" onChange={this.onChange.bind(this)}/> 
                            </div>
                            <div className="form-group">
                                <label for="password">Password:</label>
                                <input type="password" name="password" id="password" className="form-control" onChange={this.onChange.bind(this)}/> 
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}