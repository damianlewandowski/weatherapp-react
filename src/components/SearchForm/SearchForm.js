import React, { Component } from 'react';
import propTypes from 'prop-types';

import SearchInput from '../SearchInput/SearchInput';

import {getWeather} from '../../util/api';

import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: "",
      hideFormFlag: false,
      focused: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
  }

  handleInput(e) {
    this.setState({ val: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Remove white spaces
    const clearedInput = this.state.val.replace(/\s+/g, "");

    // Make api call to openweathermap.org and get forecast for next 5 days every 3 hour
    getWeather(clearedInput)
      .then((res) => {
        console.log("THERE IS THE RESPONSE:", res);
        const weatherObj = res.data;
        // Deepen array and organize forecasts by day
        weatherObj.list = weatherObj.list.reduce((acc, next, i) => {
          // Each forecast item has specific date in following format: "yyyy-mm-dd hh:00:00"
          // Looking for the day here so I could group all items by it
          const day = next.dt_txt.split(" ")[0].split("-")[2];

          // Initialize empty object
          if(i === 0) {
            acc[day] = [next];
          } else {
            // Find key in object, if there is one, push next forecast item to it
            // else create new key and initialize it with another array
            const dayKeys = Object.keys(acc);
            if(dayKeys.includes(day)) {
              acc[day].push(next);
            } else {
              acc[day] = [next];
            }
          }

          return acc;
        }, {})

        // Hide SearchInput component
        this.setState({ hideFormFlag: true })
        this.props.updateForecast(weatherObj);


        // Don't render ForecastList immediately after submit
        setTimeout(this.props.hideForm, 1000);
      })  
  }

  handleFocusChange() {
    this.setState((prevState) => {
      return {
        focused: !prevState.focused
      }
    })
  }

  getClassName() {
    let className = "";
    className += this.state.hideFormFlag ? "SearchForm SearchForm-hide " : "SearchForm ";
    className += this.state.focused      ? "SearchForm-active "          : "";

    return className;
  }

  render() {
    return (
      <form 
        className={this.getClassName()} 
        onSubmit={this.handleSubmit}
        onFocus={this.handleFocusChange}
        onBlur={this.handleFocusChange}
      >
        <SearchInput 
          handleInput={this.handleInput} 
          value={this.state.val}
          handleFocusChange={this.handleFocusChange}
        />
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  hideForm:               propTypes.func,
  updateWeatherForecast: propTypes.func,
}

export default SearchForm;