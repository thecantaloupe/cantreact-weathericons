import React from "react";
import WeatherData from "./WeatherData";
import WeatherIcon from "./WeatherIcon";

//create the component
const WeatherForecast = ({img, conditions, time}) => {
  console.log("this is img:", img);
  return (
    <div class="weather">
      <WeatherIcon img={img} />
      <WeatherData conditions={conditions} time={time} />
    </div>
  );
};

//export the component
export default WeatherForecast;
