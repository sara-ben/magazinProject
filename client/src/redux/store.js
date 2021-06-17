import { createStore, combineReducers, applyMiddleware} from 'redux';
import magazinReducer from './magazinReducer';
import crud from './Middelwere/crud'
import {CreateMagazin} from './Middelwere/crud'

const reducer = combineReducers({magazinReducer})


const store = createStore(reducer, applyMiddleware(CreateMagazin));
window.store = store;
export default store;

