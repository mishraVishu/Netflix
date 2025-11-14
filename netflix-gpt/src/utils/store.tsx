import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptSlice from "./GPTSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        movies: moviesSlice,
        gpt: gptSlice,
    }
}); 

export default store;