import React from "react";

export const Forcast = ({ weather }) => {
  return (
    <div className="text-slate-200 gap-5 grid grid-cols-3">
      {weather.forecastday.map((day) => {
        return (
          <div className="text-center">
            <img
              className="inline-block"
              src={day.day.condition.icon}
              alt="icon"
            ></img>
            <div className="font-bold">{day.day.avgtemp_c} °C</div>
            <div className="font-semibold">{day.date}</div>
          </div>
        );
      })}
    </div>
  );
};
