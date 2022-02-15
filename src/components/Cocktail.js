import { useState } from 'react';

function Cocktail ({ cocktail }){
    const [moreInfoDisplay, setMoreInfoDisplay] = useState(false);
    const {name, image, ingredients, rating, category, directions, description, personalFavorite}=cocktail;

    const ingredientsList = ingredients.map(ingredient => <li key={ingredient.ingredient}>{ingredient.quantity} {ingredient.ingredient}</li>)


    return(
        <div className="cocktail" onClick={() => setMoreInfoDisplay(!moreInfoDisplay)}>
            <h2>{name}</h2>
            <img id="cocktailimage" src={image}></img>
            <h3>{description}</h3>
            <p> {moreInfoDisplay ? ingredientsList : null } </p>
            <p> {moreInfoDisplay ? directions : null } </p>
            <p>Rating: {rating}/5 Stars</p>
        </div>
    )

}

export default Cocktail;