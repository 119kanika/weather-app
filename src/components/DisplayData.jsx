/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import useWeatherdata from "../customHooks/useWeatherData";

const DisplayData = ({ name }) => {
  const details = useSelector((store) => store.weather?.weatherData);

  console.log("Details:", details);

  useWeatherdata(name);

  let currentDate = new Date().toJSON().slice(0, 10);

  return (
   
    details?.cod == 200 && (
      <div className="flex flex-col md:flex-row items-center justify-around md:justify-between mx-auto p-0">

        <div className="relative flex flex-col justify-end overflow-hidden rounded-2xl px-4 sm:px-6 pb-8 pt-16 sm:pt-20 mt-5 w-full sm:max-w-sm lg:max-w-md mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBNoWjeeJzAYJVSERqcd74h14Pt2mQp50ZK3SdbKoEn0WkyQ9_Skt9KtEr9qYtAVm8IH4&usqp=CAU"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
          <h3 className="z-10 mt-3 text-xl sm:text-2xl md:text-3xl font-bold text-white">{name}</h3>
          <div className="z-10 text-md md:text-lg leading-6 text-gray-300">
           {details?.weather[0]?.description}
          </div>
          <h3 className="z-10 text-white ">{currentDate}</h3>
          <h3 className="z-10 text-white ">Temprature: <span className="font-bold">
          {(Math.floor(details?.main?.temp - 273))}ºC
            </span> </h3>
        </div>

        <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-6 pb-8 pt-20 mx-auto  max-w-xs md:max-w-sm lg:max-w-md mt-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvK3V9Jx40STCi3Gbe5iUzX3BR-WAy_sRbPA&s"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
          <h3 className="z-10 mt-3 text-xl md:text-2xl font-bold text-white">More Details</h3>
          <h3 className="z-10 text-white">Max: <span className="font-bold">
          {(Math.floor(details?.main?.temp_max - 273))}ºC
            </span></h3>
          <h3 className="z-10 text-white">Min: <span className="font-bold">
          {(Math.floor(details?.main?.temp_min - 273))}ºC
            </span> </h3>
          <h3 className="z-10 text-white">Humidity: <span className="font-bold">
          {details?.main?.humidity}%
            </span> </h3>

        </div>

      </div>
         
    )
  );
};

export default DisplayData;
