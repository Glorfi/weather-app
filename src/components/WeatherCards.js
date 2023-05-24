function WeatherCards() {
  return (
    <div className="weather-cards">
      <div className="weather-card">
        <img
          src="./images/conditions_icons/day_icons/116.svg"
          alt=""
          className="weather-card__image"
        />
        <p className="weather-card__title">7:00</p>
        <div className="weather-card__info">
          <img
            src="./images/icons/temperature.svg"
            alt="temperature"
            className="weather-card__info-icon"
          />
          <p className="weather-card__text">27°</p>
          <img
            src="./images/icons/wind.svg"
            alt="humidity"
            className="weather-card__info-icon"
          />
          <p className="weather-card__text">3.6</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCards;
