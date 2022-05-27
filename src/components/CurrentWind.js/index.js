import windPng from 'src/assets/pictures/wind.png';
import './styles.scss';
import { useSelector } from 'react-redux';

const CurrentWind = () => {
  const windSpeed = useSelector((state) => state.weather.currentWeather.windspeed);

  return (
    <div className="current-wind">
      <img className="current-wind--image" src={windPng} alt="vent" />
      <h2 className="current-wind--speed">speed: {windSpeed}km/h</h2>
    </div>
  );
};

export default CurrentWind;
