import { useContext, useRef, useState } from "react";
import GeneralContext from "./GeneralContext";
import WeatherCard from "./WeatherCard";

function WeatherCards() {
  const weather = useContext(GeneralContext);
  const currentHour = new Date(weather.location.localtime).getHours();
  const todayHourly = weather.forecast.forecastday[0].hour;
  const tomorrowHourly = weather.forecast.forecastday[1].hour;
  const todayToDisplay = todayHourly.slice(currentHour + 1);
  const tomorrowToDisplay = tomorrowHourly.slice(0, 24 - todayToDisplay.length);
  const hoursToDisplay = todayToDisplay.concat(tomorrowToDisplay);
  console.log(hoursToDisplay);
  const containerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  function handleWheel(event) {
    event.preventDefault();
    const container = containerRef.current;
    container.scrollLeft += event.deltaY;
  }

  function handleMouseDown(event) {
    console.log(containerRef);
    event.preventDefault();
    setIsMouseDown(true);
    setStartX(event.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  }

  function handleMouseMove(event) {
    event.preventDefault();
    if (!isMouseDown) return;
    const x = event.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    containerRef.current.scrollLeft = scrollLeft - walk;
  }

  function handleMouseUp(event) {
    event.preventDefault();
    setIsMouseDown(false);
  }

  if (weather) {
    return (
      <div
        className="weather-cards"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        ref={containerRef}
      >
        {hoursToDisplay.map((hour) => (
          <WeatherCard hour={hour} key={hour.time_epoch} />
        ))}
      </div>
    );
  }
}

export default WeatherCards;
