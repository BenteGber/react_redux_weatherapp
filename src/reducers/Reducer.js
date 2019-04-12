import { FETCH_GEO, FETCH_WEATHER } from '../actions/types';

const initialState = {
  weatherData: {},
  geoData: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_GEO:
      return {
        ...state,
        geoData: action.payload,
      };
    case FETCH_WEATHER:
      return {
        ...state,
        weatherData: action.payload,
      };
    default:
      return state;
  }
}
