import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        playingNowMovies: null,
        popularMovies: null,
        movieTrailer: null,
        topRatedSeries: null,
    },
    reducers: {
        addPlayingNowMovies: (state, action) => {
            state.playingNowMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        },
        addTopRatedSeries: (state, action) => {
            state.topRatedSeries = action.payload;
        }
    }
});

export const { addPlayingNowMovies, addPopularMovies, addMovieTrailer, addTopRatedSeries } = moviesSlice.actions;
export default moviesSlice.reducer;