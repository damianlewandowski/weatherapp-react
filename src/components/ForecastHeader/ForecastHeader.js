import React, { Component } from 'react';

import './ForecastHeader.css';

class ForecastHeader extends Component {
  state = {  }
  render() {
    return (
      <div className="ForecastHeader">
        <h4>{this.props.cityName}</h4>
        <h6>{this.props.date}</h6>
        <h3>{this.props.time}</h3>
        <h1>

            {this.props.temp}
            <i className="wi wi-celsius"></i>
        </h1>
      </div>
    );
  }
}

export default ForecastHeader;

