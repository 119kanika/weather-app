/* eslint-disable react-refresh/only-export-components */
import {createSlice} from "@reduxjs/toolkit"

const DataSlice = createSlice({
    name: "weather",
    initialState: {
        weatherData : null,
    },
    reducers: {
        addWeatherData: (state, action) => {
            state.weatherData = action.payload;
        }
    }
})

export const {addWeatherData} = DataSlice.actions;
export default DataSlice.reducer