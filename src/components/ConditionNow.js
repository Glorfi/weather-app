function ConditionNow() {
  return (
    <div className="condition-now">
      <img
        src="./images/conditions_icons/day_icons/113.svg"
        alt=""
        className="condition-now__icon"
      />
      <p className="condition-now__title">Sunny</p>
      <p className="condition-now__temp">27°</p>
      <p className="condition-now__feellike">
        Feels like <span className="condition-now__feellike-span">25°</span>
      </p>
    </div>
  );
}

export default ConditionNow;
