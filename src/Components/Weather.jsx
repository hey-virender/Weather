import React, { useEffect, useState } from "react";

export const Weather = () => {
  const [weatherData, setWeatherData] = useState();
  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/shimla%20himachal%20pradesh?unitGroup=us&key=NLJ7QEDBCG787AU7C7D2FH6ST&contentType=json"
      );
      const data = await response;

      setWeatherData(data);
    }
    fetchWeather();
  }, []);
  console.log(weatherData);

  return <div></div>;
};
