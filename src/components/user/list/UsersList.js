import React, { Component } from 'react';
import UsersAPI from '../../../api/UserAPI';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
    return {
      users: state.usersReducer.users
    }
  }

class UsersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    redirect(user) {
        this.props.history.push('/user-profile/' + user._id);
    }

    render() {
        const columns = [
            {
                Header: 'First name',
                accessor: 'firstName',
                Cell: props => <a className="cursor-pointer" onClick={() => this.redirect(props.original)}>{props.value}</a>
            },
            {
                Header: 'Last name',
                accessor: 'lastName'
            },
            {
                Header: 'Email',
                accessor: 'email'
            }
        ];

        console.log(this.props);
        console.log(this.state);

        return (           
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <ReactTable data={this.props.users} columns={columns} defaultPageSize={5}/>
                    </div>
                </div>
            </div>            
        );
    }
}

export default withRouter(connect(mapStateToProps)(UsersList));