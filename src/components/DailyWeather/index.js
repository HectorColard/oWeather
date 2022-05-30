import './styles.scss';

const DailyWeather = ({ weathercode, dailyTime }) => (
  <div className="days-weather">
    daily weather !
    <ul className="days-weather--list">
      <li className="days-weather--list--day">
        {dailyTime[0]}
        {weathercode[0]}
      </li>
      <li className="days-weather--list--day">
        {dailyTime[1]}
        {weathercode[1]}
      </li>
      <li className="days-weather--list--day">
        {dailyTime[2]}
        {weathercode[2]}
      </li>
      <li className="days-weather--list--day">
        {dailyTime[3]}
        {weathercode[3]}
      </li>
      <li className="days-weather--list--day">
        {dailyTime[4]}
        {weathercode[4]}
      </li>
      <li className="days-weather--list--day">
        {dailyTime[5]}
        {weathercode[5]}
      </li>
    </ul>
  </div>
);

export default DailyWeather;
