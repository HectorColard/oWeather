import { combineReducers } from 'redux';

import positionReducer from './position';

const rootReducer = combineReducers({
  position: positionReducer,
});

export default rootReducer;
