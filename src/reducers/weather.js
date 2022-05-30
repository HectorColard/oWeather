import { CURRENT_WEATHER, DAILY_MAX_TEMP, DAILY_MIN_TEMP, DAILY_TIME, DAILY_WEATHER_CODE } from '../actions/weather';

const initialState = {
  currentWeather: {},
  dailyTime: [],
  dailyWeatherCode: [],
  dailyMinTemp: [],
  dailyMaxTemp: [],

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

    case DAILY_MIN_TEMP:
      return {
        ...state,
        dailyMinTemp: action.value,
      };

    case DAILY_MAX_TEMP:
      return {
        ...state,
        dailyMaxTemp: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
