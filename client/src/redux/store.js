import { createStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from './userReducer';
import { actions } from './action';
import {newUser, allUsers} from './Midelwere/crud'

const reducer = combineReducers({userReducer})

const store = createStore(reducer, applyMiddleware(newUser, allUsers));
window.store = store;
export default store
