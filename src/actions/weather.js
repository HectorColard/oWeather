export const GET_WEATHER_DATAS_FROM_API = 'GET_WEATHER_DATAS_FROM_API';
export const CURRENT_WEATHER = 'CURRENT_WEATHER';
export const DAILY_TIME = 'DAILY_TIME';
export const DAILY_WEATHER_CODE = 'DAILY_WEATHER_CODE';

export const getWeatherDatasFromApi = () => ({
  type: GET_WEATHER_DATAS_FROM_API,
});

export const currentWeather = (object) => ({
  type: CURRENT_WEATHER,
  value: object,
});

export const dailyTime = (array) => ({
  type: DAILY_TIME,
  value: array,
});

export const dailyWeatherCode = (array) => ({
  type: DAILY_WEATHER_CODE,
  value: array,
});
