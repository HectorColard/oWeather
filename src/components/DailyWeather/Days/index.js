import { useSelector } from 'react-redux';
import './styles.scss';

const Days = ({ days }) => {
  const dailyWeatherCode = useSelector((state) => state.weather.dailyWeatherCode);
  console.log(dailyWeatherCode);
  return (
    <div className="days">
      {days}
    </div>
  );
};

export default Days;
