import { ADD_NOTE, DELETE_NOTE, LOAD_NOTES, EDIT_NOTE } from "./actionTypes";
import NotesAPI from '../api/NotesAPI';
import history from '../core/history/History';

export function addNote(note) {
    return (dispatch) => {
        NotesAPI.save(note).then((dbNote) => {
            dispatch({
                type: ADD_NOTE,
                payload: dbNote
            });        
        }).then(() => {
            history.push('/notes-list');
        });
    }
};

export function editNote(note) {
    return (dispatch) => {
        NotesAPI.save(note).then((edited) => {
            dispatch({
                type: EDIT_NOTE,
                payload: edited
            });
        }).then(() => {
            history.push('/notes-list');
        });
    };
}

export function loadNotes(callback) {
    return (dispatch) => {
        NotesAPI.getAll().then((notes) => {
            dispatch({
                type: LOAD_NOTES,
                payload: notes
            });

            callback && callback();
        });
    }
}

export function deleteNote(id, callback) {
    return (dispatch) => {
        NotesAPI.delete(id).then(() => {
            dispatch({
                type: DELETE_NOTE,
                payload: id
            });

            callback && callback();
        });
    }
}