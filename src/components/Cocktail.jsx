import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";

export const Cocktail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { cocktail, loading } = useSelector((state) => ({...state.cocktails}));
    const [modifiedCocktail, setModifiedCocktail] = React.useState([]);

    React.useEffect(() => {
        dispatch(API.getOne({ id }));
    }, [id]);

    return (
        <React.Fragment>
            <h1>Cocktail</h1>
            {modifiedCocktail.map((mod) => (
                <main key={mod.id}>
                    <h1>{mod.name}</h1>
                    <p>{mod.image}</p>
                </main>
            ))}
        </React.Fragment>
    );
};




