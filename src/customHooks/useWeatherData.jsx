/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
// import { useDispatch } from "react-redux";
// import { addWeatherData } from "../utils/DataSlice";
import { useEffect } from "react";

const useWeatherdata = async (cityName) => {

    if(!cityName) return;

    useEffect(() => {
        // geoData();
        const fetchData = async () => {
            const geoData = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=834587ca6fb8f3fffe83b93dafd88ad4`
              );
              const jsonData = await geoData.json();
              console.log("jsondata",jsonData);

              if(geoData.length > 0){
                const {lon, lat} = geoData[0];
                const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=834587ca6fb8f3fffe83b93dafd88ad4`)

                const weatherData = await weatherResponse.json();
                console.log("lat and log", weatherData);
              }
        }

        fetchData();
    }, [cityName])

  };



export default useWeatherdata;