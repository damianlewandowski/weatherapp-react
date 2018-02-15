import React, { Component } from 'react';
import propTypes from 'prop-types';

import './HoursSlider.css';
import WeatherForecast from '../WeatherForecast/WeatherForecast';

class HoursSlider extends Component {

  // Returns list items with hours
  getHoursItems(hours) {
    const length = hours.length;

    return hours.map((hour, i) => {
      let newHour = "";
      // Don't show all of the hours for readability on smaller screens      
      if(length > 6) {
        if(i === 0 || i === 2 || i === 5 || i === 7) {
          newHour = hour;
        }
      } else if(length > 4) {
        if(i % 2 === 0) {
          newHour = hour
        }
      } else {
        newHour = hour;
      }
      
      return (
        <li 
          key={hour}
          className={
            this.props.currentHourIndex === i.toString()
            ? "active"
            : ""}
          onClick={this.props.handleHourClick.bind(null, i.toString())}>
          {newHour}
        </li>
      );
    })
  }
  
  render() {
    // max on input:range
    const rangeMax = this.props.hours.length - 1;
    // e.g. ["12:00", "15:00", ]
    const hoursItems = this.getHoursItems(this.props.hours);
    
    return (
      <div className="HoursSlider">
        <input 
          className="slider" 
          onChange={this.props.handleRangeChange}
          type="range"
          value={this.props.currentHourIndex}
          min="0" 
          max={rangeMax} 
          steps="1"/>

        <ul className="hours">
          {hoursItems}
        </ul>
      </div>
    );
  }
}

HoursSlider.propTypes = {
  handleRangeChange: propTypes.func,
  handleHourClick: propTypes.func,
  currentHourIndex: propTypes.string,
}

export default HoursSlider;