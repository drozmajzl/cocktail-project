// TODO IMPLEMENT PATCH ON FAVORITE

import { useState } from 'react';

function Cocktail ({ cocktail }){
    const [moreInfoDisplay, setMoreInfoDisplay] = useState(false);
    const { id, name, image, ingredients, personalFavorite, category, directions, description }=cocktail;
    const [favorited, setFavorited]=useState(personalFavorite)

    function handleFavorite(){
        setFavorited(!favorited)
        fetch(`http://localhost:3000/cocktails/${id}`, 
        {
            method: 'PATCH',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    "personalFavorite": !favorited
                }
            ),
          }
          )
    }

    const ingredientsList = ingredients.map(ingredient => <li key={ingredient.ingredient}>{ingredient.quantity} {ingredient.ingredient}</li>)


    return(
        <div className="cocktail" onClick={() => setMoreInfoDisplay(!moreInfoDisplay)}>
            <h2>{name}</h2>
            <img id="cocktailimage" src={image}></img>
            <h3>{description}</h3>
            <p> {moreInfoDisplay ? ingredientsList : null } </p>
            <p> {moreInfoDisplay ? directions : null } </p>
            <button className="favorite" onClick={handleFavorite}>{favorited ? "Unfavorite ★" : "Favorite ✰"}</button>
        </div>
    )

}

export default Cocktail;