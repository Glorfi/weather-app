import extractNumberFromURL from "../utils/ExtractNumberFromUrl";
import formatHours from "../utils/FormatHours";
import getDayOrNightString from "../utils/GetDayOrNight";

function WeatherCard({ hour }) {
  const { temp_c, wind_kph, time, is_day, condition } = hour;
  const currenthour = formatHours(time);
  const partofDay = getDayOrNightString(is_day);
  const iconNumber = extractNumberFromURL(condition.icon);
  return (
    <div className="weather-card">
      <img
        src={`./images/conditions_icons/${partofDay}_icons/${iconNumber}.svg`}
        alt=""
        className="weather-card__image"
      />
      <p className="weather-card__title">{currenthour}</p>
      <div className="weather-card__info">
        <img
          src="./images/icons/temperature.svg"
          alt="temperature"
          className="weather-card__info-icon"
        />
        <p className="weather-card__text">{temp_c}°</p>
        <img
          src="./images/icons/wind.svg"
          alt="humidity"
          className="weather-card__info-icon"
        />
        <p className="weather-card__text">{wind_kph}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
