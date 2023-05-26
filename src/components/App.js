import getDayOrNightString from "../utils/GetDayOrNight";
import extractNumberFromURL from "../utils/ExtractNumberFromUrl";
import GeneralContext from "./GeneralContext";
import Info from "./Info";
import React, { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);
  const [partofDay, setPartofDay] = useState("");
  const [iconNumber, setIconNumber] = useState(null);

  useEffect(() => {
    const apiKey = "66d94a998a374e8e9e05eefe549f5856";
    const weatherApiKey = "9de4ea156227409a8a922814232105";
    let userIp;

    fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        userIp = data.ip_address;
        return fetch(
          `https://api.weatherapi.com/v1/forecast.json?q=${userIp}&days=7&key=${weatherApiKey}%20`
        ); //${userIp}
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // const objData = data;
        setWeather(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (weather) {
      console.log(weather);
      const fetchedPartOfDay = getDayOrNightString(weather.current.is_day);
      setPartofDay(fetchedPartOfDay);
      const fetchedImageNumber = extractNumberFromURL(
        weather.current.condition.icon
      );
      setIconNumber(fetchedImageNumber);
    }
  }, [weather]);

  if (weather) {
    return (
      <GeneralContext.Provider value={weather}>
        <div
          className="App"
          style={{
            height: "100%",
            position: "relative",
            backgroundImage: `url(./images/backgrounds/${partofDay}/${iconNumber}.jpg)`,
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            fontFamily: "Montserrat, sans-serif",
            color: "white",
          }}
        >
          <Info />
        </div>
      </GeneralContext.Provider>
    );
  }
}

export default App;
