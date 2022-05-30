import { useSelector } from 'react-redux';
import sunPng from 'src/assets/pictures/sun.png';
import cloudyPng from 'src/assets/pictures/cloudy.png';
import cloudPng from 'src/assets/pictures/cloud-computing.png';
import rainyPng from 'src/assets/pictures/rainy-day.png';
import rainPng from 'src/assets/pictures/rain.png';
import thunderStorm from 'src/assets/pictures/thunderstorm.png';

import './styles.scss';

const CurrentSky = () => {
  const codeweather = useSelector((state) => state.weather.currentWeather.weathercode);
  // console.log(codeweather);
  function handleCodeWeather(code) {
    if (code === 0 || code === 1) {
      return sunPng;
    }
    if (code === 2) {
      return cloudyPng;
    }
    if (code === 3) {
      return cloudPng;
    }
    if (code === 61 || code === 63) {
      return rainyPng;
    }
    if (code === 65) {
      return rainPng;
    }
    if (code === 95 || code === 96 || code === 99) {
      return thunderStorm;
    }
    return sunPng;
  }

  return (
    <div className="current-sky">
      <img className="current-sky--image" src={handleCodeWeather(codeweather)} alt="ciel" />

    </div>
  );
};

export default CurrentSky;
