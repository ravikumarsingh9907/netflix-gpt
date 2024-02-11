import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
    name: 'movies',
    initialState: {
        movieDetails: null,
        movieCast: null,
        movieVideos: null,
        movieGallery: null,
    },
    reducers: {
        addMovieDetails: (state, action) => {
            state.movieDetails = action.payload
        },
        addMovieCast: (state, action) => {
            state.movieCast = action.payload
        },
        addMovieVideos: (state, action) => {
            state.movieVideos = action.payload
        },
        addMovieGallery: (state, action) => {
            state.movieGallery = action.payload
        },
        clearMovieDetails: (state) => {
            state.movieDetails = null;
            state.movieCast = null;
            state.movieGallery = null;
            state.movieVideos = null;
        }
    }
});

export const {
    addMovieDetails,
    addMovieCast,
    addMovieVideos,
    addMovieGallery,
    clearMovieDetails,
} = detailsSlice.actions;
export default detailsSlice.reducer;