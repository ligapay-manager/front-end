import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/appReducer';


export default createStore(
  combineReducers({ appReducer }),
  applyMiddleware(thunk)
);
