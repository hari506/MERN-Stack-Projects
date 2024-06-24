import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import MainReducer from './../reducers';

let store = createStore(
  MainReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
