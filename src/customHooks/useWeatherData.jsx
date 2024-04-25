/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addWeatherData } from "../utils/DataSlice";
import conf from "../conf/config";


const useWeatherdata = async (cityName) => {

    // if(!cityName) return;
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const geoData = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${conf.apikey}`
              );
              const jsonData = await geoData.json();
              console.log("jsondata",jsonData);

              const longitute = jsonData[0]?.lon;
              const latitude = jsonData[0]?.lat;

                const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitute}&appid=${conf.apikey}`)

                const weatherData = await weatherResponse.json();
                console.log("lat and log", weatherData);

                dispatch(addWeatherData(weatherData))
              
        }

        fetchData();
    }, [cityName])

  };



export default useWeatherdata;