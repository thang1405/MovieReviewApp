import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'

import rootReducer from './auth/index';

const defaultState = {};

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunk))

export default store;