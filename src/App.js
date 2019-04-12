import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { WeatherContainer } from './components/index';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <div className="wrapper">
              <WeatherContainer />
            </div>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
