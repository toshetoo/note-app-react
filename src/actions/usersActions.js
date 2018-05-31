import UsersAPI from '../api/UserAPI';
import { ADD_USER, LOAD_USERS } from './actionTypes';

export function loadUsers() {
    return (dispatch) => {
        return UsersAPI.getAll().then((users) => {
            dispatch({
                type: LOAD_USERS,
                payload: users.data
            });
        });
    }
}