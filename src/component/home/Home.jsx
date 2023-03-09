import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Weather from "../weather/Weather";

// import MdOutlineDehaze from "react-icons-weather";

// import DehazeIcon from "@mui/icons-material/Dehaze";

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

// const weatherstack_apikey = "c1be3ab8867a1a999a8d6e1fc1922f10";

const Home = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState();
  const [showWeather, setShowWeather] = useState(false);
  //   const city = "balasore";
  // const apikey = "2a1fd86cdd8c35d46386f87caf67ba64";
  const handleClick = (e) => {
    e.preventDefault();
    setShowWeather(true);
    fetchweatherData();
  };

  const fetchweatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
      );
      setWeather(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(weather);

  return (
    <Wrapper>
      <Header>
        <h1> Weather App</h1>
        <form>
          <input
            type="text"
            placeholder="Enter City:"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Country:"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <button type="submit" onClick={handleClick}>
            Submit
          </button>
        </form>
      </Header>
      {showWeather && <Weather />}
    </Wrapper>
  );
};

export default Home;
