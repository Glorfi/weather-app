import React from "react";
import { useContext } from "react";
import ConditionNow from "./ConditionNow";
import Details from "./Details";
import WeatherCards from "./WeatherCards";
import GeneralContext from "./GeneralContext";

function InfoToday() {
  const weather = useContext(GeneralContext);

  if (weather) {
    return (
      <section className="info__today">
        <ConditionNow />
        <Details />
        <WeatherCards />
      </section>
    );
  }
}

export default InfoToday;
