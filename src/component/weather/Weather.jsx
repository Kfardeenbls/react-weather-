import React, { memo } from "react";
import styled from "styled-components";
import { WeatherIcons } from "../../App";
import "./Weather.css";

const BoxDetails = styled.div`
  border: 3px solid blue;
  width: 94%;
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
  p > span {
    font-size: 1rem;
  }
`;
const WeathrIconsStrng = styled.div`
  display: flex;
  flex-direction: column;
`;
const WeathrIcons = styled.span`
  width: 150px;
  height: 60px;
  margin: 10px auto;
`;
const Para = styled.div`
  margin-top: 1.8rem;
`;
const DisplayGrid = styled.div`
  margin-top: 2rem;
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

const Weather = (prop) => {
  const { weather } = prop;

  //calculate the utc time dt
  const utcTimestamp = weather.dt;
  const date = new Date(utcTimestamp * 1000).getTimezoneOffset();
  const localTimestamp = utcTimestamp - date * 60;
  const localDate = new Date(localTimestamp * 1000);
  const localDateString = localDate.toLocaleTimeString();

  //capitalize the First Letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const newString = capitalizeFirstLetter(weather.weather[0].description);

  // calculate Sunrise & Sunset timing
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
  //Calculate Wind speed in km
  const windSpeed = weather.wind.speed;
  const windSpeedKm = (windSpeed * 3600) / 1000;

  //Calculate pressure in hpa
  const pressure = weather.main.pressure;
  const pressureHpa = pressure / 100;

  //Calcutate Visibility in Km
  const visibility = weather.visibility;
  const visibilityKm = visibility / 1000;

  //Calcutate tempreture in ratio
  const tempMax = Math.floor(weather.main.temp_max - 273.15);
  const tempMin = Math.floor(weather.main.temp_min - 273.15);

  return (
    <div>
      <BoxDetails>
        <h3>
          {weather?.name}, {weather?.sys?.country}. weather
        </h3>
        <p>As of {localDateString}</p>
        <Center>
          <p>{`${Math.floor(weather?.main?.temp - 273)}°C`}</p>
          <WeathrIconsStrng>
            <WeathrIcons>{WeatherIcons[weather?.weather[0].icon]} </WeathrIcons>
            <span>
              {"|"}
              {newString}
            </span>
          </WeathrIconsStrng>
        </Center>
        <Para>{`${weather?.weather[0].description}`}</Para>
      </BoxDetails>
      <DisplayGrid>
        <Col1>
          <p>
            <>High/Low </>
            <span>
              {tempMax}
              {"/"}
              {tempMin}
            </span>
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
      </DisplayGrid>
    </div>
  );
};

export default memo(Weather);
