import ConditionNow from "./ConditionNow";
import Details from "./Details";
import WeatherCards from "./WeatherCards";

function InfoToday() {
  return (
    <section className="info__today">
      <ConditionNow />
      <Details />
      <WeatherCards />
    </section>
  );
}

export default InfoToday;
