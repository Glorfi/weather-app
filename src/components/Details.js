import { useContext } from "react";
import GeneralContext from "./GeneralContext";

function Details() {
  const weather = useContext(GeneralContext);
  if (weather) {
    return (
      <div className="details">
        <p className="details__title">Details:</p>
        <div className="details__element">
          <img
            src="./images/icons/humidity.svg"
            alt="humidity"
            className="details__icon"
          />
          <p className="details__text">{weather.current.humidity}%</p>
        </div>
        <div className="details__element">
          <img
            src="./images/icons/rainchance.svg"
            alt="rainchance"
            className="details__icon"
          />
          <p className="details__text">
            {weather.forecast.forecastday[0].day.daily_chance_of_rain}%
          </p>
        </div>
        <div className="details__element">
          <img
            src="./images/icons/wind.svg"
            alt="wind"
            className="details__icon"
          />
          <p className="details__text">
            {weather.current.wind_kph} km/h {weather.current.wind_dir}
          </p>
        </div>
        <div className="details__element">
          <img
            src="./images/icons/visibility.svg"
            alt="visibility"
            className="details__icon"
          />
          <p className="details__text">{weather.current.vis_km} km</p>
        </div>
        <div className="details__element">
          <img src="./images/icons/uf.svg" alt="uv" className="details__icon" />
          <p className="details__text">{weather.current.uv} UV</p>
        </div>
      </div>
    );
  }
}

export default Details;
