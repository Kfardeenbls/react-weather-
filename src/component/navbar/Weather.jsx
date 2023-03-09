import { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = "d2c261391f52b4be3798da8d6e043660";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeather(city);
      setWeatherData(data);
    };
    console.log("city:", city);

    fetchData();
  }, [city]);

  const fetchWeather = async (city) => {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(url);
    try
    {
    const response = await axios.get(url);
    return response.data;
  
  }
};

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather(city);
    console.log(city);
  };

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div>
      <h1>Weather for {city}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city-input">Enter a city:</label>
          <input
            type="text"
            id="city-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default Weather;
