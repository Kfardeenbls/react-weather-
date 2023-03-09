import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Weather from "../weather/Weather";

// Using Styeled component for designing UI
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 57%;
  transform: translate(-1%, 19%);
  font-size: 20px;
  margin: 0px auto;
  border: 3px dashed;
  border-radius: 5%;
  margin-buttom: auto;
`;

const Header = styled.div`
  h1 {
    text-align: center;
  }
  form {
    margin-bottom: 2rem;
  }

  input {
    margin-right: 2rem;
    height: 2rem;
    border: none;
    border-bottom: 1px solid black;
    background-color: antiquewhite;
    font-size: 15px;
  }

  input:focus {
    outline: none;
  }

  button {
    height: 2rem;
    font-size: 15px;
    border-radius: 8px;
  }
`;

const apikey = "d2c261391f52b4be3798da8d6e043660";

const Home = (props) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState("");
  const [showWeather, setShowWeather] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // fetching API data using Axios
    const fetchweatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apikey}`
        );
        setWeather(response.data);
        setShowWeather(true);
      } catch (error) {
        if (error) {
          alert("Please check the input field");
        }
      }

      if (country !== weather.sys.country || !country) {
        return setCountry(weather.sys.country);
      }
    };
    fetchweatherData();
  };

  return (
    <Wrapper>
      <Header>
        <h1> Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter City:"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter Country:"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </Header>
      {showWeather && <Weather weather={weather} />}
    </Wrapper>
  );
};

export default Home;
