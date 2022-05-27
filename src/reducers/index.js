import { combineReducers } from 'redux';

import positionReducer from './position';
import weatherReducer from './weather';

const rootReducer = combineReducers({
  position: positionReducer,
  weather: weatherReducer,
});

export default rootReducer;
