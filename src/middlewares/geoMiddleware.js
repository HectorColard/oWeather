import axios from 'axios';
import { cityLatitudeFromDatas, cityLongitudeFromDatas, cityNameFromDatas, cityTimezoneFromDatas, SUBMIT_POSITION_VALUE } from '../actions/position';
import { getWeatherDatasFromApi } from '../actions/weather';

const geoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_POSITION_VALUE:
      axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${store.getState().position.citySearch}`)
        .then((response) => {
          console.log(response.data.results[0].timezone);
          store.dispatch(cityNameFromDatas(response.data.results[0].name));
          store.dispatch(cityLatitudeFromDatas(response.data.results[0].latitude));
          store.dispatch(cityLongitudeFromDatas(response.data.results[0].longitude));
          store.dispatch(cityTimezoneFromDatas(response.data.results[0].timezone));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(getWeatherDatasFromApi());
        });

      break;

    default:
  }

  return next(action);
};

export default geoMiddleware;
