import { useContext } from "react";
import GeneralContext from "./GeneralContext";
import getDayOrNightString from "../utils/GetDayOrNight";
import extractNumberFromURL from "../utils/ExtractNumberFromUrl";

function ConditionNow() {
  const weather = useContext(GeneralContext);
    const partofDay = getDayOrNightString(weather.current.is_day);
    const iconNumber = extractNumberFromURL(weather.current.condition.icon);
    console.log(iconNumber);
    return (
      <div className="condition-now">
        <img
          src={`./images/conditions_icons/${partofDay}_icons/${iconNumber}.svg`}
          alt=""
          className="condition-now__icon"
        />
        <p className="condition-now__title">{weather.current.condition.text}</p>
        <p className="condition-now__temp">{weather.current.temp_c}°</p>
        <p className="condition-now__feellike">
          Feels like{" "}
          <span className="condition-now__feellike-span">
            {weather.current.feelslike_c}°
          </span>
        </p>
      </div>
    );
}

export default ConditionNow;
