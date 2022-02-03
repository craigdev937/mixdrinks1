import { createSlice } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";

const initialState = {
    cocktails: [],
    drinks: [],
    loading: false,
    error: null
};

const CocktailSlice = createSlice({
    name: "cocktails",
    initialState,
    extraReducers: {
        [API.fetchAll.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [API.fetchAll.pending]: (state) => {
            state.loading = true
        },
        [API.fetchAll.fulfilled]: (state, action) => {
            state.loading = false;
            state.cocktails = action.payload.drinks
        },
    }
});

export const CocktailReducer = CocktailSlice.reducer;





// [API.getOne.rejected]: (state, action) => {
//     state.loading = false;
//     state.error = action.payload
// },
// [API.getOne.pending]: (state) => {
//     state.loading = true
// },
// [API.getOne.fulfilled]: (state, action) => {
//     state.loading = false;
//     state.drinks = action.payload.drinks
// },