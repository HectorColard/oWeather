import './styles.scss';

const DailyWeather = ({ weathercode, dailyTime, minTemp, maxTemp }) => (
  <div className="days-weather">
    <ul className="days-weather--list">
      <li className="days-weather--list--day">
        {dailyTime[0]}
        {weathercode[0]}
        <p>Min: {minTemp[0]}°</p>
        <p>Max: {maxTemp[0]}°</p>
      </li>
      <li className="days-weather--list--day">
        {dailyTime[1]}
        {weathercode[1]}
        <p>Min: {minTemp[1]}°</p>
        <p>Max: {maxTemp[1]}°</p>
      </li>
      <li className="days-weather--list--day">
        {dailyTime[2]}
        {weathercode[2]}
        <p>Min: {minTemp[2]}°</p>
        <p>Max: {maxTemp[2]}°</p>
      </li>
      <li className="days-weather--list--day">
        {dailyTime[3]}
        {weathercode[3]}
        <p>Min: {minTemp[3]}°</p>
        <p>Max: {maxTemp[3]}°</p>
      </li>
      <li className="days-weather--list--day">
        {dailyTime[4]}
        {weathercode[4]}
        <p>Min: {minTemp[4]}°</p>
        <p>Max: {maxTemp[4]}°</p>
      </li>
      <li className="days-weather--list--day">
        {dailyTime[5]}
        {weathercode[5]}
        <p>Min: {minTemp[5]}°</p>
        <p>Max: {maxTemp[5]}°</p>
      </li>
    </ul>
  </div>
);

export default DailyWeather;
