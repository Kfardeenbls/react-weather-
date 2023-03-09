import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import { WiDaySunny } from "weather-icons-react";
import axios from "axios";

const Test = () => {
  //   const apikey = "d2c261391f52b4be3798da8d6e043660";
  //   const [WeatherData, setWeatherData] = useState(null);
  const [TestWeatherData, setTestWeatherData] = useState(null);
  //   const [inputValue, setInputValue] = useState({
  //     city: "",
  //     country: "",
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setInputValue({ ...inputValue, [name]: value });
  //   };

  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     setInputValue({});
  //     console.log(inputValue);

  //     // Make API call here using inputValue.city and inputValue.country
  //   };
  //   const fetchweatherData = async () => {
  //     const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.city},${inputValue.country}&appid=${apikey}`;

  //     try {
  //       const response = await axios.get(apiurl);
  //       setWeatherData(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  useEffect(() => {
    // fetchweatherData();

    const TestFetchweatherData = async () => {
      const city = "delhi";
      const API_KEY = "d2c261391f52b4be3798da8d6e043660";
      const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
      const apiurl = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
      try {
        const response = await axios.get(apiurl);
        setTestWeatherData(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    TestFetchweatherData();
  });

  return (
    <>
      <header>
        <h1> Weather App</h1>
        <form>
          <input
            type="text"
            placeholder="Enter City:"
            name="city"
            // value={inputValue.city}
            // onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter Country:"
            name="country"
            // value={inputValue.country}
            // onChange={handleChange}
          />
          {/* <button type="submit" onClick={handleClick}>
            Submit
          </button> */}
        </form>
      </header>
      <div>
        {/* <h3>{WeatherData.city}, IN. Weather</h3> */}
        <p>As of 7:08:45 AM/PM</p>
        <div>
          <p>28&#176;</p>
          <div>
            <p>
              <WiDaySunny />
            </p>
            <span>Haze</span>
          </div>
        </div>

        <p>haze</p>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <>
          <p>
            <span>High/Low </span>
            <span>ratio</span>
          </p>
          <p>
            <span>Humidity </span>
            <span>percentage</span>
          </p>

          <p>
            <span>Pressure </span>
            <span>hpa</span>
          </p>

          <p>
            <span>Visibility km</span>
            <span>km</span>
          </p>
        </>
        <>
          <p>
            <span>Wind km/hr</span>
            <span>km/hr</span>
          </p>

          <p>
            <span>Wind Direction degree</span>
            <span>degree</span>
          </p>

          <p>
            <span>Sunrise</span>
            <span>time AM</span>
          </p>

          <p>
            <span>Sunset </span>
            <span>time PM</span>
          </p>
        </>
      </div>
      {/* {TestWeatherData.map((data, id) => {
        return <li>{data.weather.main}</li>;
      })} */}
    </>
  );
};

export default Test;
