import { createStore, combineReducers, applyMiddleware} from 'redux';
import magazinReducer from './reducer/magazinReducer';
import postReducer from './reducer/postReducer'
import crud from './Middelwere/crud'
import {CreateMagazin,CreatePost} from './Middelwere/crud'

const reducer = combineReducers({magazinReducer,postReducer})


const store = createStore(reducer, applyMiddleware(CreateMagazin,CreatePost));
window.store = store;
export default store;

