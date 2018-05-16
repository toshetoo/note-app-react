import React, { Component } from 'react';
import AuthAPI from '../../api/AuthAPI';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            firstName: '',
            lastName: ''
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
        AuthAPI.register(this.state).then(() => {
            this.props.history.push('/login');
        });
    }

    render() {
        return (
            <div className="register-wrapper">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <div className="form-group">
                                <label for="first-name">First Name:</label>
                                <input type="text" name="firstName" id="first-name" className="form-control" onChange={this.onChange.bind(this)}/> 
                            </div>
                            <div className="form-group">
                                <label for="last-name">Last Name:</label>
                                <input type="text" name="lastName" id="last-name" className="form-control" onChange={this.onChange.bind(this)}/> 
                            </div>
                            <div className="form-group">
                                <label for="email">Email:</label>
                                <input type="email" name="email" id="email" className="form-control" onChange={this.onChange.bind(this)}/> 
                            </div>                            
                            <div>
                                <button type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}