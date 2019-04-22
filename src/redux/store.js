import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import user from './reducers/user';


export default createStore(combineReducers({ user }), composeWithDevTools(applyMiddleware(thunk)));
