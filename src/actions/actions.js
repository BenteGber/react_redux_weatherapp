import { FETCH_GEO, FETCH_WEATHER } from './types';

export const fetchGeo = () => (dispatch) => {
  //In the future: Add Error handling in case user refuses location or geolocation fails
  navigator.geolocation.getCurrentPosition((position) => {
    const cordinates = {
      lat: position.coords.latitude,
      long: position.coords.longitude,
    };
    dispatch({
      type: FETCH_GEO,
      payload: cordinates,
    });
  });
};

export const fetchWeather = (latLong) => (dispatch) => {
  const { lat, long } = latLong;
  const path = 'https://api.openweathermap.org/data/2.5/weather';
  const queryString = `${path}?lat=${lat}&lon=${long}&appid=49743dc9fb7620f4df74b26b1e4d0a9b&units=imperial`;
  fetch(queryString)
    .then((res) => res.json())
    .then((weatherData) => {
      dispatch({
        type: FETCH_WEATHER,
        payload: weatherData,
      });
    });
};
