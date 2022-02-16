import {react, useEffect, useState} from "react";
import Cocktail from "./Cocktail";

function CocktailList({ list, search, categoryFilter }){
    const filteredCocktails = list.filter(cocktail => cocktail.name.toLowerCase().includes(search.toLowerCase()) || cocktail.description.toLowerCase().includes(search.toLowerCase()) );
    const filteredByCategory = filteredCocktails.filter(cocktail => {
        if (categoryFilter === 'All'){
            return true;
        } else {
            return cocktail.category === categoryFilter;
        }
    });

    const cocktailsToDisplay = filteredByCategory.map(cocktail => <Cocktail key={cocktail.id} cocktail={cocktail}/>)

    return(
        <div>
        <h1>MENU</h1>
        {cocktailsToDisplay}
        </div>
    )
}

export default CocktailList;