import React, { Component } from 'react';

// Variables.
var url = '';
var symbol = 'AAPL'
var osize = 'compact'
var func = 'TIME_SERIES_DAILY';
var api_key = "X86NOH6II01P7R24";
var companies = ["AAPL", "AMZN", "FB", "GOOGL", "MSFT"];

class Investment_List extends Component {
  
  // Constructor function that sets the default values.
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true
    }
  }
  
  // Our component has rendered at least once.
  async componentDidMount() {
    url = 'https://www.alphavantage.co/query?function=' + func + '&symbol=' + symbol + '&outputsize=' + osize + '&apikey=' + api_key;
    var response = await fetch(url);
    var data = await response.json();
    this.setState({data: data, loading: false })
  }
  
  render() {
    
    if(this.state.loading || !this.state.data) {
      return <div>Loading :D...</div>
    } else {
      var sel = this.props.select;
      symbol = companies[sel];
      var day = this.state.data["Meta Data"]["3. Last Refreshed"];
      return (
        <div>
          <h2>Symbol: {symbol}</h2>
          <p>Url: {url}</p>
          <ul>
            <li>
              1. Open: {this.state.data["Time Series (Daily)"][day]["1. open"]}
            </li>
            <li>
              2. High: {this.state.data["Time Series (Daily)"][day]["2. high"]}
            </li>
            <li>
              3. Low: {this.state.data["Time Series (Daily)"][day]["3. low"]}
            </li>
            <li>
              4. Close: {this.state.data["Time Series (Daily)"][day]["4. close"]}
            </li>
            <li>
              5. Volume: {this.state.data["Time Series (Daily)"][day]["5. volume"]}
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default Investment_List;
