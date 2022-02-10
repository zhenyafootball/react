import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./moviseSlice/moviseSlice";

const store = configureStore({
    reducer: {
        moviesReducer
    }
})

export default store