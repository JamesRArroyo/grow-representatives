import React, { Component } from 'react';
import './App.scss';
import HeaderBar from './components/header-bar/header-bar';
import RepresentativesList from './representatives/representatives-list/representatives-list';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="App-main">
          <div className="header">
            <HeaderBar title="Who's My Representative"></HeaderBar>
          </div>
          <div className="rep-list">
            <RepresentativesList></RepresentativesList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
