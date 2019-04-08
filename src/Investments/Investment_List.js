import React, { Component } from 'react';
import './styles.css'

// Variables.
var url = '';
var symbol = 'AAPL'
var osize = 'compact'
var func = 'TIME_SERIES_DAILY';
var api_key = "X86NOH6II01P7R24";

var day;
var open;
var higher;
var lower;
var close;
var variation;
var percent;

class Investment_List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      arrow: 'up',
      page: true,
      color: 'rgb(91, 255, 85)'
    }
  }

  fetch_data() {
    url = 'https://www.alphavantage.co/query?function=' + func + '&symbol='
          + symbol + '&outputsize=' + osize + '&apikey=' + api_key;

    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      return this.setState({data, loading: false }, () => {
        this.set_values();
      });
    });
  }

  set_values() {
    if(this.state.data["Note"]) {
      this.setState({page: false});
    } else {
      this.setState({page: true});
      day = this.state.data["Meta Data"]["3. Last Refreshed"];
      day = day.substr(0,day.indexOf(' '));
      open = this.state.data["Time Series (Daily)"][day]["1. open"];
      higher = this.state.data["Time Series (Daily)"][day]["2. high"];
      lower = this.state.data["Time Series (Daily)"][day]["3. low"];
      close = this.state.data["Time Series (Daily)"][day]["4. close"];
      variation = open - close;
      if(variation > 0) {
        percent = ((open - close)/close)*100;
        this.setState({color: 'rgb(255, 90, 85)'});
        this.setState({arrow: 'down'});
      } else {
        percent = ((close - open)/open)*100;
        this.setState({color: 'rgb(91, 255, 85)'});
        this.setState({arrow: 'up'});
      }
      variation = -variation;
    }
  }

  render() {
    
    if(this.props.select !== '' && symbol !== this.props.select) {
      symbol = this.props.select;
      this.fetch_data();
    }
    
    if(this.state.page) {
      if(!this.state.loading && this.state && this.state.data) {
        return (
          <div>
            
            <h2>Company: {symbol} <img src={
              require("../Images/arrow_" + this.state.arrow + ".png")} 
              className="arrows" /></h2>
            
            <p className="info">Open price: $USD {open}</p>
            <p className="info">Higher price: $USD {higher}</p>
            <p className="info">Lower price: $USD {lower}</p>
            <p style={{background: this.state.color}} className="info">Price variation: $USD {variation}</p>
            <p style={{background: this.state.color}} className="info">Price percent: {percent} %</p>

          </div>
        );
      } else {
        return null;
      }
    } else {
      return (
        <p className="info">Call frequency is 5 calls per minute and 500 calls per day.</p>
      )
    }
    
  }
}

export default Investment_List;
