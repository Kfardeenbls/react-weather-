import React from "react";
import Home from "./component/home/Home";
import { NightIcon } from "./component/icons/NightIcon";
import { CloudyNightIcon } from "./component/icons/CloudyNightIcon";
import { DayIcon } from "./component/icons/DayIcon";
import { CloudyIcon } from "./component/icons/CloudyIcon";
import { PerfectDayIcon } from "./component/icons/PerfectDayIcon";
import { RainIcon } from "./component/icons/RainIcon";
import { RainNightIcon } from "./component/icons/RainNightIcon";
import { StormIcon } from "./component/icons/StormIcon";
import { SunnyIcon } from "./component/icons/SunnyIcon";
import { SmokeIcon } from "./component/icons/SmokeIcon";

export const WeatherIcons = {
  "01d": <SunnyIcon />,
  "01n": <NightIcon />,
  "02d": <DayIcon />,
  "02n": <CloudyNightIcon />,
  "03d": <CloudyIcon />,
  "03n": <CloudyIcon />,
  "04d": <PerfectDayIcon />,
  "04n": <CloudyNightIcon />,
  "09d": <RainIcon />,
  "09n": <RainNightIcon />,
  "10d": <RainIcon />,
  "10n": <RainNightIcon />,
  "11d": <StormIcon />,
  "11n": <StormIcon />,
  "50n": <SmokeIcon />,
};

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
