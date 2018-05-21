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

     render() {
         const { user } = this.state;
         return (
             <div className="user-profile-holder mt-5">
                <div className="row">
                    <div className="col-12">
                        <h3>{user.firstName} {user.lastName}</h3>
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