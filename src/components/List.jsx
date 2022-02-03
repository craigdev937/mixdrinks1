import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";

export const List = () => {
    const dispatch = useDispatch();
    const { cocktails, loading } = 
    useSelector((state) => state.cocktails);
    const [modCocktail, setModCocktail] = React.useState([]);
    
    React.useEffect(() => {
        dispatch(API.fetchAll());
    }, [dispatch]);

    React.useEffect(() => {
        if (cocktails) {
            const newCocktails = cocktails.map((item) => {
                return {
                    id: item.idDrink,
                    name: item.strDrink,
                    image: item.strDrinkThumb,
                    info: item.strAlcoholic,
                    glass: item.strGlass
                };
            });
            setModCocktail(newCocktails);
        } else {
            setModCocktail([]);
        }
    }, [cocktails]);

    if (loading) {
        return (
            <aside className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </aside>
        );
    };

    if (!cocktails) <h2>No Cocktails matched your search</h2>
    
    return (
        <React.Fragment>
            {modCocktail.map((item) => {
                return (
                    <main className="col" key={item.id}>
                        <img src={item.image} alt={item.name} className="card-img-top" />
                    </main>
                );
            })}
        </React.Fragment>
    );
};




