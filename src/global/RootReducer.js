import { configureStore } from "@reduxjs/toolkit";
import { CocktailReducer } from "./CocktailSlice";

export const RootReducer = configureStore({
    reducer: {
        cocktails: CocktailReducer
    }
});



