import { useSelector } from 'react-redux';
import './styles.scss';

const CurrentTemperature = () => {
  const temperature = useSelector((state) => state.weather.currentWeather.temperature);
  console.log(temperature);
  return (
    <div className="current-temperature">
      <h2 className="current-temperature--show">{temperature}°</h2>
    </div>
  );
};

export default CurrentTemperature;
