import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './styles.scss';
import UsersList from './users/UsersList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <UsersList />
      </div>
    </Provider>
  );
};

export default App;
