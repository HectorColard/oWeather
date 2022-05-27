import { useSelector } from 'react-redux';
import sunPng from 'src/assets/pictures/sun.png';

import './styles.scss';

const CurrentSky = () => {
  const codeweather = useSelector((state) => state.weather.currentWeather.weathercode);
  console.log(codeweather);

  return (
    <div className="current-sky">
      <img className="current-sky--image" src={sunPng} alt="soleil" />

    </div>
  );
};

export default CurrentSky;
