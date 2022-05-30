import axios from 'axios';
import { currentWeather, dailyTime, dailyWeatherCode, GET_WEATHER_DATAS_FROM_API } from '../actions/weather';

const weatherMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_WEATHER_DATAS_FROM_API:
      axios.get(`
        https://api.open-meteo.com/v1/forecast?latitude=${store.getState().position.latitude}&longitude=${store.getState().position.longitude}&hourly=temperature_2m,precipitation&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=${store.getState().position.timezone}
      `)
        .then((response) => {
          console.log(response.data);
          store.dispatch(currentWeather(response.data.current_weather));
          store.dispatch(dailyTime(response.data.daily.time));
          store.dispatch(dailyWeatherCode(response.data.daily.weathercode));
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    default:
  }

  return next(action);
};

export default weatherMiddleware;
