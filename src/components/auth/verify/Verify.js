import React, { Component } from 'react';
import AuthAPI from '../../../api/AuthAPI';
import UsersAPI from '../../../api/UserAPI';

import './verify.css';

export default class Verify extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            password: '',
            rePassword: '',
            id: '',
            matchingPass: true
        };
    }

    componentDidMount() {
        this.setState({
            id: this.props.match.params['id']
        });
    }

    onChange(event) {
        event.persist();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();

        if(this.state.password === this.state.rePassword) {
            AuthAPI.verifyAccount(this.state).then(() => {
                this.props.history.push('/login');
            });
        } else {
            this.setState({
                matchingPass: false
            });
        }
        
    }

    render() {
        return (
            <div className="verify-wrapper mt-5">                
                <div className="row form-row">
                    <div className="col-12">
                        <h2>Verified!</h2>
                        <p>Thank you for verifying you account. Enter your password below: </p>
                    </div>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="col-12">
                            <div className="form-group">
                                <label>Password: </label>
                                <input type="password" className="form-control" name="password" onChange={this.onChange.bind(this)}/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label>Repeat password: </label>
                                <input type="password" name="rePassword" className="form-control" onChange={this.onChange.bind(this)}/>
                                {!this.state.matchingPass ? <p className="text-danger">Passwords do not match</p> : ''}
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>                    
                </div>
            </div>
        );
    }
}