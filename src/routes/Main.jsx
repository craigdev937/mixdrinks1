import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Cocktail } from "../components/Cocktail";

export const Main = () => (
    <BrowserRouter>
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cocktail/:id" element={<Cocktail />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);



