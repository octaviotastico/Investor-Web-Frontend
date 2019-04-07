import React, { Component } from 'react';

import Dropdown_Menu from './Menu/Dropdown_Menu';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">

        <Dropdown_Menu
          name="company"
          items={[
            { value: 'Apple', id: 0 },
            { value: 'Amazon', id: 1 },
            { value: 'Facebook', id: 2 },
            { value: 'Google', id: 3 },
            { value: 'Microsoft', id: 4 },
          ]}
        />
      </div>
    );
  }
}

export default App;
