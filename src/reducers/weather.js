import { CURRENT_WEATHER } from '../actions/weather';

const initialState = {
  currentWeather: {},

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
