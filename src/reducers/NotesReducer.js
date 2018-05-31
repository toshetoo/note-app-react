import { ADD_NOTE, DELETE_NOTE, LOAD_NOTES, EDIT_NOTE } from "../actions/actionTypes";


export const notesReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_NOTES: 
            return {...state, notes: [...action.payload]};
        case ADD_NOTE:
            return {...state, notes: [...state.notes, action.payload]};
        case EDIT_NOTE: 
            let tempNotes = state.notes.filter(n => n._id !== action.payload._id);
            tempNotes.push(action.payload);
            return {...state, notes: [...tempNotes] };
        case DELETE_NOTE:
            return {...state, notes: [...state.notes.filter(n => n._id !== action.payload)] };
        default:
            return state;
    }
}