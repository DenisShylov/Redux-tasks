import React from 'react';
import ThemedButton from './ThemedButton';
import { ThemeContext } from './ThemeContext';

import './index';
import { themes, ThemesContext } from './ThemeContext';

class App extends React.Component {
  state = {
    theme: themes.dark,
  };

  toggleTheme = () => {
    const newTheme =
      this.state.theme === themes.dark ? themes.light : themes.dark;

    this.setState({
      theme: newTheme,
    });
  };
  render() {
    return (
      <div>
        <ThemesContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toggleTheme}>Dynamic Theme</ThemedButton>
        </ThemesContext.Provider>
        <ThemedButton onClick={this.toggleTheme}>Default Theme</ThemedButton>
      </div>
    );
  }
}

export default App;
