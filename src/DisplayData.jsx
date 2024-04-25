/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import useWeatherdata from "./customHooks/useWeatherData";

const DisplayData = ({name}) => {
    const details = useSelector( 
        store => store.weather?.weatherData?.main
    )

    console.log("Details:", details?.feels_like);

    useWeatherdata(name)

    // const [feels_like, humidity, temp, temp_max, temp_min] = details;


    return (
        details && (
          <div>
              <p>{details.feels_like}</p>
          </div>
        )

    )
}

export default DisplayData