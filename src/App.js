import React, { Component } from 'react';
import './App.css';
import SearchComponent from './SearchComponent/SearchComponent.js';
import ListComponent from './ListComponent/ListComponent.js';

class App extends Component {
  render() {
    return (
      <div className = "appcomponent"> 
        <SearchComponent/>
        <ListComponent/>
      </div>

    );
  }
}

export default App;
