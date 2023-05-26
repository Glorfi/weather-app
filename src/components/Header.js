import { useContext } from "react";
import GeneralContext from "./GeneralContext";
import formatDate from "../utils/FormatDate";

function Header() {
  const weather = useContext(GeneralContext);
  const date = formatDate(weather.location.localtime);

  if (weather) {
    return (
      <header className="info__geo-time">
        <h1 className="info__city">{weather.location.name}</h1>
        <p className="info__time">{date}</p>
      </header>
    );
  }
}
export default Header;
