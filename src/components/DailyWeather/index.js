import { useSelector } from 'react-redux';
import Days from './Days';
import './styles.scss';

const DailyWeather = () => {
  const daily = useSelector((state) => state.weather.dailyTime);
  console.log(daily);
  return (
    <div className="daily">
      daily weather !
      {daily.map((element) => (
        <Days
          days={element}
        />
      ))}
    </div>
  );
};

export default DailyWeather;
