import React, { Component } from 'react';
import { fetchGeo, fetchWeather } from '../actions/actions';
import { connect } from 'react-redux';

class WeatherContainer extends Component {
  //Once Component Mounts we get the Geolocation from the HTML5 Navigator
  componentDidMount() {
    this.props.fetchGeo();
  }

  handleClick = () => {
    this.props.fetchWeather(this.props.geoData);
  };

  render() {
    const { geoData, weatherData } = this.props;

    //If no Geodata is present load the 'loading' spinner while we wait for the lcaotion data
    if (!geoData.lat) {
      return <div className="loader">Loading</div>;
    }
    //If Geodata is present but no weather data dipslay the button so they can fetch the weather.
    if (!weatherData.main) {
      return (
        <div>
          <h2> Click the button below to check the weather </h2>
          <button type="button" onClick={this.handleClick}>
            Fetch Weather
          </button>
        </div>
      );
    }
    const { main, icon } = weatherData.weather[0];
    const { temp, temp_max, temp_min } = weatherData.main;
    //future add dynamic css based on data recieved from weather api
    return (
      <div>
        <h1>{weatherData.name}</h1>
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={main} />
        <h2>{main}</h2>
        <h2>Current Temp: {temp}</h2>
        <h3>Today's High: {temp_max}</h3>
        <h3>Today's Low: {temp_min}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  weatherData: state.appData.weatherData,
  geoData: state.appData.geoData,
  error: state.appData.error,
});

export default connect(
  mapStateToProps,
  { fetchGeo, fetchWeather },
)(WeatherContainer);
