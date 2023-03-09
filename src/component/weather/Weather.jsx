import React from "react";
import styled from "styled-components";
import { WiDaySunny } from "weather-icons-react";

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

const Weather = ({ prop }) => {
  const { weather } = prop;
  // calculate Sunrise & Sunset timing...
  console.log(weather);
  //   const sunriseTime = new Date(weather.sys.sunrise * 1000).toLocaleTimeString(
  //     [],
  //     {
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     }
  //   );
  //   const sunsetTime = new Date(weather.sys.sunset * 1000).toLocaleTimeString(
  //     [],
  //     {
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     }
  //   );
  //   //Calculate Wind speed in km..
  //   const windSpeed = weather.wind.speed;
  //   const windSpeedKm = (windSpeed * 3600) / 1000;

  //   //Calculate pressure in hpa..
  //   const pressure = weather.main.pressure;
  //   const pressureHpa = pressure / 100;

  //   //Calcutate Visibility in Km..
  //   const visibility = weather.visibility;
  //   const visibilityKm = visibility / 1000;

  //   //Calcutate tempreture in ratio...
  //   //   const temperature = weather.main.temp;
  //   //   const temperatureRatio = (temperature - 273.15) / 100;
  //   const temperature = weather.main.temp;
  //   const temperatureRatio = (temperature - 273.15) / 100;
  const temperatureRatio = "12/21";
  const pressureHpa = "21";
  const visibilityKm = "21";
  const windSpeedKm = "21";
  const sunriseTime = "21";
  const sunsetTime = "12";

  return (
    <div>
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
    </div>
  );
};

export default Weather;
