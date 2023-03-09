import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

// import MdOutlineDehaze from "react-icons-weather";
import { WiDaySunny } from "weather-icons-react";
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
const BoxDetails = styled.div`
  border: 3px solid blue;
  width: 80%;
  padding: 1rem;
  padding-top: 0px;
  border-radius: 3rem;
  height: 14rem;
  background-color: antiquewhite;

  h3 {
    margin: 10px;
  }

  p {
    margin: 5px 10px;
    font-size: 15px;
  }
`;

const Center = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin-left: 15rem;
  div {
    text-align: center;
    align-items: center;
  }
  p {
    padding: 0;
    margin: 0;
    display: flex;
    display: inline-block;
    align-items: center;
    font-size: 5rem;
  }
  div > p {
    padding-top: 21px;
  }
  p > span {
    font-size: 1rem;
  }
`;
const Para = styled.div`
  p {
    font-size: 20px;
  }
`;
const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-right: 24rem;
  width: 20rem;

  p {
    height: 3rem;
    width: 100%;
    border-bottom: 1px dashed;
  }
  span {
    float: right;
  }
`;
const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-left: 24rem;
  width: 20rem;
  margin-top: -22.2rem;
  p {
    height: 3rem;
    width: 100%;
    border-bottom: 1px dashed;
  }
  span {
    float: right;
  }
`;
const apikey = "d2c261391f52b4be3798da8d6e043660";

// const weatherstack_apikey = "c1be3ab8867a1a999a8d6e1fc1922f10";

const Home = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState();
  //   const cityTest = "balasore";
  //   const apikey = "2a1fd86cdd8c35d46386f87caf67ba64";
  const handleClick = (e) => {
    e.preventDefault();

    console.log(city);
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

  // calculate Sunrise & Sunset timing...
  console.log(weather);
  const sunriseTime = new Date(weather.sys.sunrise * 1000).toLocaleTimeString(
    [],
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );
  const sunsetTime = new Date(weather.sys.sunset * 1000).toLocaleTimeString(
    [],
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );
  //Calculate Wind speed in km..
  const windSpeed = weather.wind.speed;
  const windSpeedKm = (windSpeed * 3600) / 1000;

  //Calculate pressure in hpa..
  const pressure = weather.main.pressure;
  const pressureHpa = pressure / 100;

  //Calcutate Visibility in Km..
  const visibility = weather.visibility;
  const visibilityKm = visibility / 1000;

  //Calcutate tempreture in ratio...
  //   const temperature = weather.main.temp;
  //   const temperatureRatio = (temperature - 273.15) / 100;
  const temperature = weather.main.temp;
  const temperatureRatio = (temperature - 273.15) / 100;

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
      <BoxDetails>
        <h3>
          {weather?.name}, {weather?.sys?.country}. Weather
        </h3>
        <p>As of 7:08:45 AM/PM</p>
        <Center>
          <p>{`${Math.floor(weather?.main?.temp - 273)}°C`}</p>
          <div>
            <p>
              <WiDaySunny />
            </p>
            <span>{` | ${weather?.weather[0].description}`}</span>
          </div>
        </Center>
        <Para>
          <p>haze</p>
        </Para>
      </BoxDetails>
      <div style={{ marginTop: "1rem" }}>
        <Col1>
          <p>
            <>High/Low </>
            <span>{temperatureRatio}</span>
          </p>
          <p>
            <>Humidity </>
            <span>{weather?.main?.humidity}%</span>
          </p>

          <p>
            <>Pressure </>
            <span>{pressureHpa.toFixed(1)}hpa</span>
          </p>

          <p>
            <>Visibility </>
            <span>{visibilityKm}km</span>
          </p>
        </Col1>
        <Col2>
          <p>
            <>Wind </>
            <span>{windSpeedKm.toFixed(1)}km/hr</span>
          </p>

          <p>
            <>Wind Direction </>
            <span>
              {weather?.wind?.deg}&#176;{"C"}
            </span>
          </p>

          <p>
            <>Sunrise</>
            <span>{sunriseTime}</span>
          </p>

          <p>
            <>Sunset </>
            <span>{sunsetTime}</span>
          </p>
        </Col2>
      </div>
    </Wrapper>
  );
};

export default Home;
