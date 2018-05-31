import { LOAD_USERS } from "../actions/actionTypes";

export const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_USERS: 
            return {...state, users: [...action.payload]};        
        default:
            return state;
    }
}