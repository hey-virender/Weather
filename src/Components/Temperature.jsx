import React from "react";

export const Temperature = ({ setCity, stats }) => {
  const handleCityChange = (e) => {
    e.preventDefault();
    setCity(e.target.elements.city.value);
  };
  return (
    <>
      <div className="flex justify-between">
        <form onSubmit={handleCityChange}>
          <input
            type="text"
            name="city"
            className="bg-slate-600 border border-slate-500 text-slate-200 placeholder-slate-400 text-md w-60 p-2 focus:outline-none focus:border-slate-400"
            placeholder="Enter Your City Name"
            required
          ></input>
          <button type="submit" style={{ display: "none" }}></button>
        </form>

        <div className="m-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <img className="h-24 w-24" src={stats.icon} alt="weather condition" />
      </div>
      <div className="flex justify-center items-center text-slate-200 mt-4 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
        <p className="font-semibold text-[55px]">{stats.temp}</p>
        <span className="text-[33px]">°C</span>
      </div>
      <div className="flex justify-center items-center text-slate-300 mt-4 text-[24px] text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
        {stats.condition}
      </div>
      <div className="flex justify-center mt-3 text-[15px] text-slate-400 cursor-pointer">
        Today {stats.time} | {stats.location}
      </div>
    </>
  );
};
