import { CURRENT_WEATHER, DAILY_TIME, DAILY_WEATHER_CODE } from '../actions/weather';

const initialState = {
  currentWeather: {},
  dailyTime: [],
  dailyWeatherCode: [],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.value,
      };

    case DAILY_TIME:
      return {
        ...state,
        dailyTime: action.value,
      };

    case DAILY_WEATHER_CODE:
      return {
        ...state,
        dailyWeatherCode: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
