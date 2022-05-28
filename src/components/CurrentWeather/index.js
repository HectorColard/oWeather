import { useSelector } from 'react-redux';
import CurrentSky from '../CurrentSky';

import CurrentTemperature from '../CurrentTemperature';
import CurrentWind from '../CurrentWind.js';
import DailyWeather from '../DailyWeather';
import SearchCity from '../SearchCity';
import './styles.scss';

const CurrentWeather = () => {
  const city = useSelector((state) => state.position.city);
  const county = useSelector((state) => state.position.county);

  console.log(city);

  return (
    <div className="current">
      <SearchCity />
      <h1 className="current-city">{city}</h1>
      <h2 className="current-city--county">{county}</h2>
      <h3 className="current-city--infos">Today's weather</h3>
      <CurrentTemperature />
      <CurrentWind />
      <CurrentSky />
      <DailyWeather />
    </div>
  );
};

export default CurrentWeather;
