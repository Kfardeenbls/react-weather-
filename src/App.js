import React from "react";
import Home from "./component/home/Home";
import { PressureIcon } from "./component/icons/PressureIcon";
import { CloudyNightIcon } from "./component/icons/CloudyNightIcon";

export const WeatherIcons = {
  "01d": <PressureIcon />,
  //   "01n": "/assets/icons/night.svg",
  //   "02d": "/assets/icons/day.svg",
  //   "02n": "/assets/icons/cloudy-night.svg",
  //   "03d": "/assets/icons/cloudy.svg",
  //   "03n": "/assets/icons/cloudy.svg",
  //   "04d": "/assets/icons/perfect-day.svg",
  "04n": <CloudyNightIcon />,
  //   "09d": "/assets/icons/rain.svg",
  //   "09n": "/assets/icons/rain-night.svg",
  //   "10d": "/assets/icons/rain.svg",
  //   "10n": "/assets/icons/rain-night.svg",
  //   "11d": "/assets/icons/storm.svg",
  //   "11n": "/assets/icons/storm.svg",
};

const App = () => {
  return (
    <div>
      {/* {WeatherIcons["01d"]} */}
      {/* <PressureIcon /> */}
      <Home />
    </div>
  );
};

export default App;
