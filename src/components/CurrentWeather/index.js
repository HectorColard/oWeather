import CurrentTemperature from '../CurrentTemperature';
import SearchCity from '../SearchCity';
import './styles.scss';

const CurrentWeather = () => (
  <div className="current">
    <SearchCity />
    <h1 className="current-city">Paris</h1>
    <h2 className="current-city--infos">Today's weather</h2>
    <CurrentTemperature />
  </div>
);

export default CurrentWeather;
