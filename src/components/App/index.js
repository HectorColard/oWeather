// == Import
import { useSelector } from 'react-redux';
import sunPng from 'src/assets/pictures/sun.png';
import cloudyPng from 'src/assets/pictures/cloudy.png';
import cloudPng from 'src/assets/pictures/cloud-computing.png';
import rainyPng from 'src/assets/pictures/rainy-day.png';
import rainPng from 'src/assets/pictures/rain.png';
import thunderStorm from 'src/assets/pictures/thunderstorm.png';

import CurrentWeather from '../CurrentWeather';
import './styles.scss';

// == Composant
function App() {
  const dailyWeatherCode = useSelector((state) => state.weather.dailyWeatherCode);
  const daily = useSelector((state) => state.weather.dailyTime);

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
    <div className="app">
      <CurrentWeather
        weathercode={dailyWeatherCode.map((code) => (
          <img
            className="days-weather--image"
            src={handleCodeWeather(code)}
            alt="ciel"
          />
        ))}
        dailyTime={daily.map((day) => (
          <h3 className="days-weather--time">
            {day}
          </h3>
        ))}
      />
    </div>
  );
}

// == Export
export default App;
