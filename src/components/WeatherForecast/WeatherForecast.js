import React, { Component } from 'react';
import propTypes from 'prop-types';

import ForecastHeader from '../ForecastHeader/ForecastHeader';
import ForecastInfo from '../ForecastInfo/ForecastInfo';
import HoursSlider from '../HoursSlider/HoursSlider';
import ForecastDays from '../ForecastDays/ForecastDays';

import './WeatherForecast.css';

class WeatherForecast extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      // Initialize state with present day
      currentDayForecast: this.props.forecast.list[Object.keys(this.props.forecast.list)[0]],
      // Updated in HoursSlider to determine which hour forecast to show
      currentHourIndex: "0",
      currentDayIndex: "0",
    }

    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleHourClick = this.handleHourClick.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
  }

  handleRangeChange(event) {
    const currentHourIndex = event.target.value;
    this.setState({ currentHourIndex });
  }

  handleHourClick(index) {
    const currentHourIndex = index;
    this.setState({ currentHourIndex });
  }

  handleDayChange(dayIndex) {
    if(dayIndex !== this.state.currentDayIndex) { // Prevent rerendering
      this.setState({
        currentDayForecast: this.props.forecast.list[Object.keys(this.props.forecast.list)[dayIndex]],
        // Reset the hour to point at the earliest hour possible
        currentHourIndex: "0",
        currentDayIndex: dayIndex,
      })
    }
  }

  render() {
    const forecast = this.props.forecast;
    const cityName = forecast.city.name + ", " + forecast.city.country;
    // ["yyyy-mm-dd", "hh:mm:ss:mm"]
    // the day user looked up forecast
    const hourIndex = this.state.currentHourIndex;
    const wholeDate = this.state.currentDayForecast[hourIndex].dt_txt.split(" ");
    // yyyy-mm-dd format    
    const date = wholeDate[0];
    // "hh:mm"
    const time = wholeDate[1].substring(0, 5);

    // For displaying temperature in ForecastHeader
    const temp = this.state.currentDayForecast[this.state.currentHourIndex].main.temp;

    // For displaying day names in ForecastDays component
    const dates = Object.keys(forecast.list).map((dayNum) => {
      return forecast.list[dayNum][0].dt_txt.split(" ")[0];
    })
    
    // Passed to ForecastHeader
    const hoursCurrentDay = this.state.currentDayForecast.map((forecast) => (
      // Time like 3:00, 12:00 or 15:00 
      forecast.dt_txt.split(" ")[1].substring(0, 5)
    ));
    
    return (
      <div className="WeatherForecast">

        <div className="WeatherForecast-top">
        <ForecastInfo 
          currentDayForecast={this.state.currentDayForecast}
          hourIndex={this.state.currentHourIndex}/>
          <ForecastHeader
            cityName={cityName}
            date={date}
            time={time}
            temp={temp}
          />
        </div>

        <HoursSlider 
          hours={hoursCurrentDay}
          currentHourIndex={this.state.currentHourIndex}
          handleRangeChange={this.handleRangeChange}
          handleHourClick={this.handleHourClick}/>

        <ForecastDays 
          dates={dates}
          handleDayChange={this.handleDayChange} 
          currentDayIndex={this.state.currentDayIndex}/>
      </div>
    );
  }
}

WeatherForecast.propTypes = {
  forecast: propTypes.object,
}

export default WeatherForecast;