import React from 'react';
import { Provider } from 'react-redux';
import store from './weather/store';
import './styles.scss';
import Weather from './weather/Weather';

const App = () => {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
};

export default App;
