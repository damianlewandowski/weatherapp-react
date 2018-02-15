import React, { Component } from 'react';

import SearchForm    from  './components/SearchForm/SearchForm';
import WeatherForecast  from  './components/WeatherForecast/WeatherForecast';

import summer from './images/summer.jpg';
import autumn from './images/autumn.jpg';
import winter from './images/winter.jpg';
import spring from './images/spring.jpg';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      showForm: true,
      forecast: {}
    }

    this.hideForm = this.hideForm.bind(this);
    this.updateForecast = this.updateForecast.bind(this);
  }

  // Set background accoring to season
  componentDidMount() {
    // + 1 because of 0 - 11 range for months
    const month = new Date().getMonth() + 1;

    if(month >= 6 && month <= 9) {
      this.setState({ backgroundImage: summer })
    } else if(month >= 10 && month <= 12) {
      this.setState({ backgroundImage: autumn })
    } else if(month >= 1 && month <= 3) {
      this.setState({ backgroundImage: winter })
    } else {
      this.setState({ backgroundImage: spring })      
    }
  }

  updateForecast(weatherObj) {
    this.setState({ forecast: weatherObj });
  } 

  hideForm() {
    this.setState({ showForm: false })
  }

  render() {
    const backgroundImage = this.state ? this.state.backgroundImage : summer;
    return (
      <div className="App" style={{
        background: `url(${backgroundImage}) no-repeat center center fixed`, 
        backgroundSize: "cover",
         height: "100vh",
      }}>

        <div className="container">
          {
            this.state.showForm 
            ? <SearchForm
                hideForm={this.hideForm}
                updateForecast={this.updateForecast} />
            : <WeatherForecast forecast={this.state.forecast} />
          }     
        </div>
      </div>
    );
  }
}

export default App;
