 import React, { Component } from 'react';
 import UsersAPI from '../../../api/UserAPI';
 import { withRouter } from 'react-router-dom';

class UserProfile extends Component {
     constructor(props) {
         super(props);

         this.state = {
             user: {}
         };
     }

     componentDidMount() {
        let id = this.props.computedMatch.params['id'];

        UsersAPI.getById(id).then((user) => {
            this.setState({
                user: user.data[0]
            });
        });
     }

     redirectToEdit() {
         debugger;
         this.props.history.push('/edit-user/' + this.state.user._id);
     }

     render() {
         const { user } = this.state;
         const isCurrentUser = UsersAPI.getLoggedUser()._id === user.id;
         return (
             <div className="user-profile-holder mt-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="d-inline-block">{user.firstName} {user.lastName}</h3> {isCurrentUser ? <button onClick={this.redirectToEdit.bind(this)} className="btn btn-primary">Edit</button> : ''}
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
             
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-12">
                                <span>Email: </span> <span>{user.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
         );
     }
 }

 export default withRouter(UserProfile);