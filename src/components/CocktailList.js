import {react, useEffect, useState} from "react";
import Cocktail from "./Cocktail";

function CocktailList({ list }){
    
    const cocktailsToDisplay = list.map(cocktail => <Cocktail key={cocktail.id} cocktail={cocktail}/>)

    return(
        <div>
        {cocktailsToDisplay}
        </div>
    )
}

export default CocktailList;