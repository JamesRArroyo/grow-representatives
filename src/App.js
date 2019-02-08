import React, { Component } from 'react';
import './App.scss';
import HeaderBar from './components/header-bar/header-bar';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="App-main">
          <HeaderBar title="Who's My Representative"></HeaderBar>

        </div>
      </div>
    );
  }
}

export default App;
