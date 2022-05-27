export const GET_WEATHER_DATAS_FROM_API = 'GET_WEATHER_DATAS_FROM_API';
export const CURRENT_WEATHER = 'CURRENT_WEATHER';

export const getWeatherDatasFromApi = () => ({
  type: GET_WEATHER_DATAS_FROM_API,
});

export const currentWeather = (object) => ({
  type: CURRENT_WEATHER,
  value: object,
});
