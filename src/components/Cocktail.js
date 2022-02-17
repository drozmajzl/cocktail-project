import '../App.css';
import { useState } from 'react';

function Cocktail ({ cocktail, updateFavorites, handleRemove }){
    const [moreInfoDisplay, setMoreInfoDisplay] = useState(false);
    const { id, name, image, ingredients, personalFavorite, category, directions, description, userAdded } = cocktail;
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
          .then(r=>r.json())
          .then(data=>updateFavorites(data))
    }

    const ingredientsList = ingredients.map(ingredient => <li key={ingredient.ingredient}>{ingredient.quantity} {ingredient.ingredient}</li>)


    return(
        <div className="card-container">
        <div  id="cocktail-card" className={favorited ? "favoriteCocktail" : "cocktail"}>
            <div onClick={() => setMoreInfoDisplay(!moreInfoDisplay)}>
                <h1 className="card-header">{name}</h1>
                <img id="cocktailimage" src={image}></img>
                <p id="cocktail-description">{description}</p>
                <p> {moreInfoDisplay ? ingredientsList : null } </p>
                <p> {moreInfoDisplay ? directions : null } </p>
            </div>
            <button className="button-29" onClick={handleFavorite}>{favorited ? "Unfavorite ★" : "Favorite ✰"}</button>
            {userAdded ? <button id="card-button" className="button-28" onClick={() => handleRemove(id)}>REMOVE</button> : null}
        </div>
        </div>
    )

}

export default Cocktail;