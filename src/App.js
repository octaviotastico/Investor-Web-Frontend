import React, { Component } from 'react';
import Investment_List from './Investments/Investment_List';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      company: '',
    }
  }
  
  render() {
    return (

      <div className="App">

        <h1> Select a company: </h1>

        <button className="button" onClick={() => this.setState({ company: 'AAPL' })}>Apple</button>
        <button className="button" onClick={() => this.setState({ company: 'AMZN' })}>Amazon</button>
        <button className="button" onClick={() => this.setState({ company: 'FB' })}>Facebook</button>
        <button className="button" onClick={() => this.setState({ company: 'GOOGL' })}>Google</button>
        <button className="button" onClick={() => this.setState({ company: 'MSFT' })}>Microsoft</button>

        <Investment_List select = {this.state.company} />
      </div>
    );
  }
}

export default App;
