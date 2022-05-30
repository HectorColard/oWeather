import { useSelector } from 'react-redux';
import CurrentSky from '../CurrentSky';

import CurrentTemperature from '../CurrentTemperature';
import CurrentWind from '../CurrentWind.js';
import DailyWeather from '../DailyWeather';
import SearchCity from '../SearchCity';
import './styles.scss';

const CurrentWeather = ({ weathercode, dailyTime }) => {
  const city = useSelector((state) => state.position.city);
  const county = useSelector((state) => state.position.county);
  const minTemp = useSelector((state) => state.weather.dailyMinTemp);
  const maxTemp = useSelector((state) => state.weather.dailyMaxTemp);
  // const daily = useSelector((state) => state.weather.dailyTime);
  console.log(minTemp, maxTemp);
  console.log(weathercode[0]);

  return (
    <div className="current">
      <SearchCity />
      <h1 className="current-city">{city}</h1>
      <h2 className="current-city--county">{county}</h2>
      <h3 className="current-city--infos">Today's weather</h3>
      <CurrentTemperature />
      <CurrentWind />
      <CurrentSky />
      <DailyWeather
        dailyTime={dailyTime}
        weathercode={weathercode}
        minTemp={minTemp}
        maxTemp={maxTemp}
        // dailyTime={daily.map((day) => (
        //   <h3 className="days-weather--time">
        //     {day}
        //   </h3>
        // ))}
      />
    </div>
  );
};

export default CurrentWeather;
