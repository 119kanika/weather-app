/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import DisplayData from "./DisplayData";

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

    const firstLetter = cityName.charAt(0).toUpperCase();
    const remainLetter = cityName.slice(1);
    const capsLetter = firstLetter + remainLetter;


    return (
        <div className="flex flex-col items-center justify-center py-8">
                    <h2 className="font-bold text-3xl">Weather app</h2>
            <div className=" w-1/2 text-center mx-auto">
            <div className="py-6 ">
                <form action="" onSubmit={handleSubmit}>
                    <input
                        className= "h-12 px-4 w-full bg-gray-100 rounded-lg text-zinc-700 text-lg"
                        value={cityName}
                        onChange={handleInput}
                        type="text"
                        placeholder="Enter the city name"
                    />
                </form>

            </div>
            <div className="">

            <DisplayData name={capsLetter} />
            </div>

            </div>

        </div>
    );
}

export default Body;
