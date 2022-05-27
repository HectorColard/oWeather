export const HANDLE_POSITION_VALUE = 'HANDLE_POSITION_VALUE';
export const SUBMIT_POSITION_VALUE = 'SUBMIT_POSITION_VALUE';
export const CITY_NAME_FROM_DATAS = 'CITY_NAME_FROM_DATAS';
export const CITY_LATITUDE_FROM_DATAS = 'CITY_LATITUDE_FROM_DATAS';
export const CITY_LONGITUDE_FROM_DATAS = 'CITY_LONGITUDE_FROM_DATAS';
export const CITY_TIMEZONE_FROM_DATAS = 'CITY_TIMEZONE_FROM_DATAS';

export const handlePositionValue = (string) => ({
  type: HANDLE_POSITION_VALUE,
  value: string,
});

export const submitPositionValue = () => ({
  type: SUBMIT_POSITION_VALUE,
});

export const cityNameFromDatas = (string) => ({
  type: CITY_NAME_FROM_DATAS,
  value: string,
});

export const cityLatitudeFromDatas = (float) => ({
  type: CITY_LATITUDE_FROM_DATAS,
  value: float,
});

export const cityLongitudeFromDatas = (float) => ({
  type: CITY_LONGITUDE_FROM_DATAS,
  value: float,
});

export const cityTimezoneFromDatas = (string) => ({
  type: CITY_TIMEZONE_FROM_DATAS,
  value: string,
});
