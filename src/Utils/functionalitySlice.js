import { createSlice } from "@reduxjs/toolkit";

const functionalitySlice = createSlice({
    name: 'functionality',
    initialState: {
        isCloseButton: true,
        searchData: [],
        searchText: null
    },
    reducers: {
        toggleSearchBar: (state, action) => {
            state.isCloseButton = action.payload;
        },
        addSearchData: (state, action) => {
            state.searchData = [...state.searchData, ...action.payload]
        },
        clearSearchData: (state) => {
            state.searchData = [];
        },
        addSearchText: (state, action) => {
            state.searchText = action.payload;
        }
    }
});

export const {
    toggleSearchBar,
    addSearchData,
    clearSearchData,
    addSearchText,
} = functionalitySlice.actions;
export default functionalitySlice.reducer;