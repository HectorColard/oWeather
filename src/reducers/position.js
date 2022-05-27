import { CITY_LATITUDE_FROM_DATAS, CITY_LONGITUDE_FROM_DATAS, CITY_NAME_FROM_DATAS, CITY_TIMEZONE_FROM_DATAS, HANDLE_POSITION_VALUE } from '../actions/position';

const initialState = {
  citySearch: '',
  city: '',
  latitude: 48.85341,
  longitude: 2.3488,
  timezone: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_POSITION_VALUE:
      return {
        ...state,
        citySearch: action.value,
      };

    case CITY_NAME_FROM_DATAS:
      return {
        ...state,
        city: action.value,
      };

    case CITY_LATITUDE_FROM_DATAS:
      return {
        ...state,
        latitude: action.value,
      };

    case CITY_LONGITUDE_FROM_DATAS:
      return {
        ...state,
        longitude: action.value,
      };

    case CITY_TIMEZONE_FROM_DATAS:
      return {
        ...state,
        timezone: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
