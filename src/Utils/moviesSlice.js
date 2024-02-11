import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        playingNowMovies: null,
        popularMovies: null,
        movieTrailer: null,
        topRatedMovies: null,
        movieDetails: null,
    },
    reducers: {
        addPlayingNowMovies: (state, action) => {
            state.playingNowMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        },
        addMovieDetails: (state, action) => {
            state.movieDetails = action.payload
        }
    }
});

export const {
    addPlayingNowMovies,
    addPopularMovies,
    addMovieTrailer,
    addTopRatedMovies,
    addMovieDetails,
} = moviesSlice.actions;
export default moviesSlice.reducer;