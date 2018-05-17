import React, { Component } from 'react';
import AuthAPI from '../../api/AuthAPI';
import UsersAPI from '../../api/UserAPI';

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
            <div className="verify-wrapper">
                <p>Thank you for verifying you account. Enter your password below: </p>
                <div className="row">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="col-xs-12">
                            <div className="form-group">
                                <label>Password: </label>
                                <input type="password" name="password" onChange={this.onChange.bind(this)}/>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="form-group">
                                <label>Repeat password: </label>
                                <input type="password" name="rePassword" onChange={this.onChange.bind(this)}/>
                                {!this.state.matchingPass ? <p className="text-danger">Passwords do not match</p> : ''}
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <button type="submit">Save</button>
                        </div>
                    </form>                    
                </div>
            </div>
        );
    }
}