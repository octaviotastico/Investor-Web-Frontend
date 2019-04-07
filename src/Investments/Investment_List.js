import React, { Component } from 'react';

// Variables.
var url = ''
var api_key = "X86NOH6II01P7R24";
var companies = ["AAPL", "AMZN", "FB", "GOOGL", "MSFT"];
var dict = {
  apple: 0,
  amazon: 1,
  facebook: 2,
  google: 3,
  microsoft: 4,
};

class Investment_List extends Component {
  
  // Constructor function that sets the default values.
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true
    }
  }

  // Our component has rendered at least once...
  async componentDidMount(com) {
    //var symbol = companies[dict.com]
    //url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&outputsize=compact&apikey=' + api_key;
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=FB&outputsize=compact&apikey=' + api_key;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({data: data, loading: false })
    }

  render() {

    if(this.state.loading || !this.state.data) {
      return <div>Loading :D...</div>
    } else {
      return (
        <div>
          {this.state.data["Time Series (Daily)"]["2019-04-05"]["1. open"]}
        </div>
      );
    }
  }
}

export default Investment_List;
