import React, { Component } from 'react';
import './styles.css'

// Variables.
var url = '';
var symbol = 'AAPL'
var osize = 'compact'
var func = 'TIME_SERIES_DAILY';
var api_key = "X86NOH6II01P7R24";
var companies = ["AAPL", "AMZN", "FB", "GOOGL", "MSFT"];

var day;
var open;
var higher;
var lower;
var close;
var variation;
var percent;
var red;

class Investment_List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true
    }
  }

  async fetch_data() {
    var sel = this.props.select;
    symbol = companies[sel];
    url = 'https://www.alphavantage.co/query?function=' + func + '&symbol=' + symbol + '&outputsize=' + osize + '&apikey=' + api_key;
    var response = await fetch(url);
    var data = await response.json();
    this.setState({data: data, loading: false });
    this.set_values();  
  }

  set_values() {
    day = this.state.data["Meta Data"]["3. Last Refreshed"];
    open = this.state.data["Time Series (Daily)"][day]["1. open"];
    higher = this.state.data["Time Series (Daily)"][day]["2. high"];
    lower = this.state.data["Time Series (Daily)"][day]["3. low"];
    close = this.state.data["Time Series (Daily)"][day]["4. close"];
    variation = open - close;
    if(variation > 0) {
      percent = ((open - close)/close)*100;
      red = true;
    } else {
      percent = ((close - open)/open)*100;
      red = false;
    }
  }

  render() {
    
    this.fetch_data();
    if(this.state.loading || !this.state || !this.state.data) {
      return <div className="loading">Loading :D...</div>
    } else {

      if(red) {
        return (
          <div>
            <h2>Symbol: {symbol}</h2>
            <p>Url: {url}</p>
            <ul className="list">
              <li className="elems">
                Open price: {open}
              </li>
              <li className="elems">
                Higher price: {higher}
              </li>
              <li className="elems">
                Lower price: {lower}
              </li>
              <li className="down" >
                Price variation: {variation}
              </li>
              <li className="down">
                Price percent: {percent}
              </li>
            </ul>
          </div>
        );
      } else {
        return (
          <div>
            <h2>Symbol: {symbol}</h2>
            <p>Url: {url}</p>
            <ul className="list">
              <li className="elems">
                Open price: {open}
              </li>
              <li className="elems">
                Higher price: {higher}
              </li>
              <li className="elems">
                Lower price: {lower}
              </li>
              <li className="up" >
                Price variation: {variation}
              </li>
              <li className="up" >
                Price percent: {percent}
              </li>
            </ul>
          </div>
        );
      }

    }
  }
}

export default Investment_List;
