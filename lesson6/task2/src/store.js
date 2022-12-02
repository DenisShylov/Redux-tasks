import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import usersReducer from './users.reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  users: usersReducer,
});
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhacers(applyMiddleware(thunk)));

export default store;
