

function Details() {
  return (
    <div className="details">
      <p className="details__title">Details:</p>
      <div className="details__element">
        <img
          src="./images/icons/humidity.svg"
          alt="humidity"
          className="details__icon"
        />
        <p className="details__text">88%</p>
      </div>
      <div className="details__element">
        <img
          src="./images/icons/rainchance.svg"
          alt="rainchance"
          className="details__icon"
        />
        <p className="details__text">20%</p>
      </div>
      <div className="details__element">
        <img
          src="./images/icons/wind.svg"
          alt="wind"
          className="details__icon"
        />
        <p className="details__text">3.6 km/h N</p>
      </div>
      <div className="details__element">
        <img
          src="./images/icons/visibility.svg"
          alt="visibility"
          className="details__icon"
        />
        <p className="details__text">6 km</p>
      </div>
      <div className="details__element">
        <img src="./images/icons/uf.svg" alt="uv" className="details__icon" />
        <p className="details__text">5 UV</p>
      </div>
    </div>
  );
}

export default Details;
