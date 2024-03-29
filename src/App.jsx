import { useEffect, useState } from "react";
import "./App.css";
import { Highlights } from "./Components/Highlights";
import { Temperature } from "./Components/Temperature";
import { Forcast } from "./Components/Forcast";
import { SkeletonCard } from "./Components/SkeletonCard";

function App() {
  const [city, setCity] = useState("New Delhi");
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const apiURL = `https://api.weatherapi.com/v1/forecast.json?key= 37889958e4d4422289152801242803&q=${city}&days=10&aqi=no&alerts=no`;
  useEffect(() => {
    setLoading(true);
    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("error");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => console.error("Error fetching weather data:", error))
      .finally(() => setLoading(false));
  }, [city]);
  return (
    <>
      {loading ? (
        <SkeletonCard />
      ) : (
        <div className="bg-[#1f213a] h-screen ">
          <div className="flex justify-around align-top">
            <div className="mt-40 w-1/5 h-1/3">
              {weatherData && (
                <Temperature
                  setCity={setCity}
                  stats={{
                    temp: weatherData.current.temp_c,
                    condition: weatherData.current.condition.text,
                    isDay: weatherData.current.isDay,
                    location: weatherData.location.name,
                    time: weatherData.location.localtime,
                  }}
                ></Temperature>
              )}
            </div>
            <div className="mt-40 w-1/3 h-1/3 grid grid-cols-2 gap-6 ">
              <h2 className="text-slate-200 text-2xl p-10 col-span-2">
                {weatherData.location.name}, {weatherData.location.region}
              </h2>
              {weatherData && (
                <>
                  <Highlights
                    stats={{
                      title: "Wind Status",
                      value: weatherData.current.wind_kph,
                      unit: "kph",
                      direction: weatherData.current.wind_dir,
                    }}
                  />
                  <Highlights
                    stats={{
                      title: "Humidity",
                      value: weatherData.current.humidity,
                      unit: "%",
                    }}
                  />
                  <Highlights
                    stats={{
                      title: "Visibility",
                      value: weatherData.current.vis_km,
                      unit: "km",
                    }}
                  />
                  <Highlights
                    stats={{
                      title: "Air Pressure",
                      value: weatherData.current.pressure_in,
                      unit: "in",
                    }}
                  />
                </>
              )}
            </div>
            <div className="mt-28 w-1/3 h-1/3 ml-2">
              {weatherData && <Forcast weather={weatherData.forecast} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
