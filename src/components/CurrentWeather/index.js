import { useSelector } from 'react-redux';

import CurrentTemperature from '../CurrentTemperature';
import SearchCity from '../SearchCity';
import './styles.scss';

const CurrentWeather = () => {
  const city = useSelector((state) => state.position.city);

  console.log(city);

  return (
    <div className="current">
      <SearchCity />
      <h1 className="current-city">{city}</h1>
      <h2 className="current-city--infos">Today's weather</h2>
      <CurrentTemperature />
    </div>
)};

export default CurrentWeather;
