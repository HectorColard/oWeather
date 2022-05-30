import './styles.scss';

const DailyWeather = ({ weathercode, dailyTime, minTemp, maxTemp }) => {
  const date = new Date();
  console.log(date);
  const dateFormat = (int) => date.setDate(date.getDate() + (int));

  return (
    <div className="days-weather">
      <ul className="days-weather--list">
        <li className="days-weather--list--day">
          {new Date(dateFormat(0)).toDateString()}
          {weathercode[0]}
          <p>Min: {minTemp[0]}°</p>
          <p>Max: {maxTemp[0]}°</p>
        </li>
        <li className="days-weather--list--day">
          {new Date(dateFormat(1)).toDateString()}
          {weathercode[1]}
          <p>Min: {minTemp[1]}°</p>
          <p>Max: {maxTemp[1]}°</p>
        </li>
        <li className="days-weather--list--day">
          {new Date(dateFormat(1)).toDateString()}
          {weathercode[2]}
          <p>Min: {minTemp[2]}°</p>
          <p>Max: {maxTemp[2]}°</p>
        </li>
        <li className="days-weather--list--day">
          {new Date(dateFormat(1)).toDateString()}
          {weathercode[3]}
          <p>Min: {minTemp[3]}°</p>
          <p>Max: {maxTemp[3]}°</p>
        </li>
        <li className="days-weather--list--day">
          {new Date(dateFormat(1)).toDateString()}
          {weathercode[4]}
          <p>Min: {minTemp[4]}°</p>
          <p>Max: {maxTemp[4]}°</p>
        </li>
        <li className="days-weather--list--day">
          {new Date(dateFormat(1)).toDateString()}
          {weathercode[5]}
          <p>Min: {minTemp[5]}°</p>
          <p>Max: {maxTemp[5]}°</p>
        </li>
        <li className="days-weather--list--day">
          {new Date(dateFormat(1)).toDateString()}
          {weathercode[6]}
          <p>Min: {minTemp[6]}°</p>
          <p>Max: {maxTemp[6]}°</p>
        </li>
      </ul>
    </div>
  );
};

export default DailyWeather;
