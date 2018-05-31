import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/index';
import thunk from 'redux-thunk';

export default (preloadedState) => {  
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk));         
};