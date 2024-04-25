import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './DataSlice'

const appStore = configureStore(
    {
        reducer: {
            weather: dataReducer,
        }
    }
)

export default appStore;