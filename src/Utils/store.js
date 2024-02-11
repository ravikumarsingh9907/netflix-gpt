import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import functionalityReducer from "./functionalitySlice";
import detailsReducer from "./detailsSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        functionality: functionalityReducer,
        details: detailsReducer,
    },
});

export default store;