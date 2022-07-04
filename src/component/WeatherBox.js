import React from "react";
import styled from "styled-components";

const WeatherBox = ({weather}) => {
  return (
    <WeatherBoxWrap>
      <h1>{weather?.name}</h1>
      <h2>{weather?.main.temp}°C / {weather?Math.floor(weather.main.temp *1.8+32):0}°F</h2>
      <h2>{weather?.weather[0].description}</h2>
    </WeatherBoxWrap>
  );
};

const WeatherBoxWrap = styled.div`
  margin-top: 1em;
  height: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default WeatherBox;
