import React from 'react';
import { throwContext } from './context.js';
import Header from './Header.jsx';

class App extends React.Component {
  state = {
    userData: {
      name: 'Nikola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    },
  };
  render() {
    return (
      <div className="page">
        <throwContext.Provider value={this.state.userData}>
          <Header />
        </throwContext.Provider>
      </div>
    );
  }
}

export default App;
