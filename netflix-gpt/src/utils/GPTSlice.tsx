import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState: {
        showGPTSearch: false,
        gptMovies: null,
        gptResults: null,
    },
    reducers: {
        toggleGPTSearch: (state) => {
            state.showGPTSearch = !state.showGPTSearch
        },
        addGPTResults: (state, action) => {
            const { gptMovies, TMDBData } = action.payload;
            state.gptMovies = gptMovies;
            state.gptResults = TMDBData;
        }
    }
});

export const { toggleGPTSearch, addGPTResults } = gptSlice.actions;

export default gptSlice.reducer;