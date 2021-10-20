import React from "react";
import "./styles.css";
//  IMPORT DATA 
import wheatherArr from "./weatherData";
// IMPORT WEATHERAPP
import WeatherForecast from "./components/WeatherForecast"
console.log("this is wheatherArr:", wheatherArr);

export default function App() {
  const weatherforecast = wheatherArr.map((ele,index) => {
    return <WeatherForecast {...ele} key={index} />
  });

  console.log("weather forecast:",weatherforecast);
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      <section className="weatherforecast">
        {weatherforecast}
      </section>
    </div>
  );
}
