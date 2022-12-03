import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './weather.reducer';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  weatherReducer,
  composeEnhacers(applyMiddleware(thunk))
);

export default store;
