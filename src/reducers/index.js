import {combineReducers} from 'redux';
import weather from './weatherReducers';

const rootReducer = combineReducers({
  weather
});

export default rootReducer;