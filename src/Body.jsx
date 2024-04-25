/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import "./App.css";
import useWeatherData from "./customHooks/useWeatherData";

function Body() {
  const [cityName, setCityName] = useState("");

  const handleInput = (e) => {
    setCityName(e.target.value);
  };

  // console.log("input:", cityName);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("cityName:", cityName);
  };

  useWeatherData(cityName);

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <h2>weather app</h2>
        <input
          value={cityName}
          onChange={handleInput}
          type="text"
          placeholder="Enter the city name"
        />
        <button>Submit</button>
      </form>

      <div>
        <h2>City Weather state:</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default Body;
