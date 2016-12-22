import * as types from '../actions/actionTypes';

export default function weatherReducer(state = {}, action) {
  switch(action.type) {

    case types.FETCH_WEATHER_BY_CITY:
      return Object.assign({}, action.payload);

    case types.FETCH_WEATHER_BY_COORD:
      return Object.assign({}, action.payload);

    default:
      return state;
  }

}