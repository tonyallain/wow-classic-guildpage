import { combineReducers } from 'redux';
import appReducer from './app-reducer';
import navbarReducer from './navbar-reducer';

export default combineReducers({ app: appReducer, navbar: navbarReducer });
