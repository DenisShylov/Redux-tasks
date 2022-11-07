import { createStore, combineReducers } from 'redux';
import counterReducer from './counter.reducer';
import usersReducer from './users.reducer';

const appReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

export const store = createStore(appReducer);
