import React from "react";

const data = () => {
  const data = {
    coord: {
      lon: 86.9317,
      lat: 21.4942,
    },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
    ],
    base: "stations",
    main: {
      temp: 300.85,
      feels_like: 300.69,
      temp_min: 300.85,
      temp_max: 300.85,
      pressure: 1012,
      humidity: 42,
      sea_level: 1012,
      grnd_level: 1010,
    },
    visibility: 10000,
    wind: {
      speed: 3.69,
      deg: 154,
      gust: 6.3,
    },
    clouds: {
      all: 59,
    },
    dt: 1678363758,
    sys: {
      country: "IN",
      sunrise: 1678321617,
      sunset: 1678364355,
    },
    timezone: 19800,
    id: 1277599,
    name: "Balasore",
    cod: 200,
  };
  console.log(data);
  return <div>data</div>;
};

export default data;
