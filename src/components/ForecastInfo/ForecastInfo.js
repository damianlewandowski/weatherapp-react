import React, { Component } from 'react';

import '../../weather-icons/css/weather-icons.css';

import './ForecastInfo.css';

class ForecastInfo extends Component {
  render() {
    const index = this.props.hourIndex;
    const pickedForecast = this.props.currentDayForecast[index];
    return (
      <div className="ForecastInfo">
        <div className="ForecastInfo-header">
        <img src={`http://openweathermap.org/img/w/${pickedForecast.weather[0].icon}.png`} alt=""/>
        
          <h4>{pickedForecast.weather[0].description}</h4>
        </div>
        <ul>
          <li>
            <i className="wi wi-cloudy"></i>
            <strong>{pickedForecast.clouds.all} %</strong>
          </li>
          <li>
            <i className="wi wi-humidity"></i>
            <strong>{pickedForecast.main.humidity} % humidity</strong>
          </li>
          <li>
            <i className="wi wi-barometer"></i>
            <strong>{pickedForecast.main.pressure} hPa</strong>
          </li>
          <li>
            <i className="wi wi-strong-wind"></i>
            <strong>{pickedForecast.wind.speed} m/s</strong>
          </li>
        </ul>
      </div>
    );
  }
}

export default ForecastInfo;