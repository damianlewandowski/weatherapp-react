import React, { Component } from 'react';
import propTypes from 'prop-types';

import './ForecastDays.css';

class ForecastDays extends Component {
  render() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const dayItems = this.props.dates.map((date, i) => {
      const day = new Date(date).getDay();
      const dayName = days[day];
      return <li
        className={this.props.currentDayIndex === i.toString() ? "active" : ""}
        key={dayName}
        onClick={this.props.handleDayChange.bind(null, i.toString())}>{dayName}</li>;
    })

    return (
      <ul className="ForecastDays">
        {dayItems}
      </ul>
    );
  }
}

ForecastDays.propTypes = {
  dates: propTypes.array,
  handleClick: propTypes.func,
}

export default ForecastDays;