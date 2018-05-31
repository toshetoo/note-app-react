import { combineReducers } from 'redux';
import { notesReducer } from './NotesReducer';
import { usersReducer } from './UsersReducer';

export const rootReducer = combineReducers({
    notesReducer, usersReducer
});