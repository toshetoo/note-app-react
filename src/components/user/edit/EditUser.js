import React, { Component } from 'react';
import UsersAPI from '../../../api/UserAPI';
import { withRouter } from 'react-router-dom';

class UserProfileEdit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
            image: ''
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

     onChange(event) {
         event.persist();

         this.setState({
            user: { ...this.state.user, [event.target.name]: event.target.value }
         });
     }

     onImageChange(event) {
        this.setState({
            image: event.target.files[0]
        });
     }

     onSubmit(event) {
        event.preventDefault();
        
        if(this.state.image) {
            UsersAPI.uploadProfilePicture(this.state.image).then((res) => {
                
                UsersAPI.save({...this.state.user, image: res.data}).then(() => {
                    this.props.history.push('/users-list');
                });
            });
        } else  {
            UsersAPI.save(this.state).then(() => {
                this.props.history.push('/users-list');
            });
        }       
     }

    render() {
        return (
            <div className="edit-form-wrapper">
                <form onSubmit={this.onSubmit.bind(this)}>   
                    <div className="row">
                        <div className="col-6">                                 
                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" name="firstName" className="form-control" onChange={this.onChange.bind(this)} value={this.state.user.firstName} />
                            </div>                    
                        </div>            
                    </div>
                    <div className="row">
                        <div className="col-6">                                 
                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" name="lastName" className="form-control" onChange={this.onChange.bind(this)} value={this.state.user.lastName} />
                            </div>                    
                        </div>            
                    </div>
                    <div className="row">
                        <div className="col-6">                                 
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" name="email" className="form-control" onChange={this.onChange.bind(this)} value={this.state.user.email} />
                            </div>                    
                        </div>            
                    </div>
                    <div className="row">
                        <div className="col-6">                                 
                            <div className="form-group">
                                <label>Image</label>
                                <input type="file" name="image" onChange={this.onImageChange.bind(this)}/>
                            </div>                    
                        </div>            
                    </div>
                    <div className="row">
                        <div className="col-6">                                 
                            <button type="submit">Save</button>                   
                        </div>            
                    </div>
                </form>
            </div>
        );        
    }

}

export default withRouter(UserProfileEdit);