import * as types from './actionTypes';
import KEY from '../api/KEY';

export function fetchWeatherByCity(city) {
  const uri = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${KEY}`;

  return (dispatch) => {
    return fetch(uri)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch({ type: types.FETCH_WEATHER_BY_CITY, payload: responseJson })
      })
      .catch((error) => {
        throw(error);
      });
  }
}

export function fetchWeatherByCoord(lat, lon) {
  const uri = fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${KEY}`);

  return (dispatch) => {
    return fetch(uri)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch({ type: types.FETCH_WEATHER_BY_CITY, payload: responseJson })
      })
      .catch((error) => {
        throw(error);
      });
  }
}