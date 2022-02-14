import {react, useEffect, useState} from "react";
import Cocktail from "./Cocktail";

function CocktailList(){
    const [cocktails, setCocktails]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/cocktails')
        .then(r=>r.json())
        .then(data=>setCocktails(data))
    }, [])

    const cocktailsToDisplay = cocktails.map(cocktail => <Cocktail key={cocktail.id} cocktail={cocktail}/>)

    return(
        <div>
        {cocktailsToDisplay}
        </div>
    )
}

export default CocktailList;