import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './redux/store.js';
import './styles.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
