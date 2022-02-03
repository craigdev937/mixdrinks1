import { createAsyncThunk } from "@reduxjs/toolkit";

const SEARCH = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const LOOKUP = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
class FetchAPI {
    fetchAll = createAsyncThunk("cocktails/fetchAll", 
    async () => {
        const res = await fetch(SEARCH);
        if (!res.ok) throw new Error("The Fetch Failed!");
        return res.json();
    });

    getOne = createAsyncThunk("cocktails/fetchOne", 
    async ({ id }) => {
        const res = await fetch(`${LOOKUP}/${id}`);
        if (!res.ok) throw new Error("The Fetch Failed!");
        return res.json();
    });

    searchDrink = createAsyncThunk("drink/searchDrink", 
    async ({ searchText }) => {
        const res = await fetch(`${SEARCH}/${searchText}`);
        if (!res.ok) throw new Error("The Fetch Failed!");
        return res.json();
    });
};

export const API = new FetchAPI();




