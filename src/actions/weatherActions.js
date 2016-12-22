import * as types from './actionTypes';
import KEY from '../api/KEY';

export function fetchWeatherByCity(city) {
  const request = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${KEY}`);

  return (dispatch) => {
    request.then( ({data}) => {
      dispatch({ type: types.FETCH_WEATHER_BY_CITY, payload: data })
    });
  }
}

export function fetchWeatherByCoord(lat, lon) {
  const request = fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${KEY}`);

  return (dispatch) => {
    request.then( ({data}) => {
      dispatch({ type: types.FETCH_WEATHER_BY_COORD, payload: data })
    });
  }
}