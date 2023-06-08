import getDayOrNightString from "../utils/GetDayOrNight";
import extractNumberFromURL from "../utils/ExtractNumberFromUrl";
import GeneralContext from "./GeneralContext";
import Info from "./Info";
import React, { useEffect, useState } from "react";
import geoApi from "../utils/GeoApi";
import weatherApi from "../utils/WeatherApi";

function App() {
  const [userData, setUserData] = useState();
  const [weather, setWeather] = useState();
  const [partofDay, setPartofDay] = useState("");
  const [iconNumber, setIconNumber] = useState();

  useEffect(() => {
    geoApi
      .getUserIp()
      .then((data) => {
        setUserData(data);
        weatherApi
          .getWeather(data.ip_address)
          .then((weatherData) => {
            setWeather(weatherData);
          })
          .catch((er) => {
            console.log(er);
          });
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  useEffect(() => {
    if (weather) {
      const fetchedPartOfDay = getDayOrNightString(weather.current.is_day);
      setPartofDay(fetchedPartOfDay);
      const fetchedImageNumber = extractNumberFromURL(
        weather.current.condition.icon
      );
      if (typeof fetchedImageNumber === "number") {
        setIconNumber(fetchedImageNumber);
      } else {
        const imageNumbersList = fetchedImageNumber.split(" ");
        setIconNumber(imageNumbersList);
      }
    }
  }, [weather]);

  if (weather) {
    return (
      <GeneralContext.Provider value={weather}>
        <div
          className="App"
          style={{
            backgroundImage: `url(./images/backgrounds/${partofDay}/${iconNumber}.jpg)`,
          }}
        >
          <Info />
        </div>
      </GeneralContext.Provider>
    );
  } else {
    return (
      <div
        className="App"
        style={{
          backgroundImage: "none",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: "60px", color: "white", zIndex: "1" }}>
          Delivering ⛅ to you!
        </p>
      </div>
    );
  }
}

export default App;
