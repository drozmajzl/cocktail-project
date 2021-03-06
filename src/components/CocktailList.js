import '../App.css';
import {react, useEffect, useState} from "react";
import Cocktail from "./Cocktail";

function CocktailList({ list, search, categoryFilter, updateFavorites, handleRemove }){
    const filteredCocktails = list.filter(cocktail => cocktail.name.toLowerCase().includes(search.toLowerCase()) || cocktail.description.toLowerCase().includes(search.toLowerCase()) );
    const filteredByCategory = filteredCocktails.filter(cocktail => {
        if (categoryFilter === 'all'){
            return true;
        }
        else if (categoryFilter === 'userAdded'){
            return (cocktail.userAdded)
        }
         else {
            return cocktail.category === categoryFilter;
        }
    });

    const cocktailsToDisplay = filteredByCategory.map(cocktail => <Cocktail className="button-28" key={cocktail.id} cocktail={cocktail} updateFavorites={updateFavorites} handleRemove={handleRemove}/>)

    return(
        <>
            <h1 id="menu-title">Cocktail Menu</h1>
            <div id="menudiv">
                {cocktailsToDisplay}
            </div>
        </>
    )
}

export default CocktailList;