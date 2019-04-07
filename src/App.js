import React, { Component } from 'react';
import Investment_List from './Investments/Investment_List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Investment_List />
      </div>
    );
  }
}

export default App;
