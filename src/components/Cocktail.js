
function Cocktail ({ cocktail }){
    const {name, image, ingredients, rating, category, directions, description, personalFavorite}=cocktail;

    return(
        <div>
            <h2>{name}</h2>
            <img src={image}></img>
            <h3>{description}</h3>
            <p>Rating: x/5 Stars</p>
        </div>
    )

}

export default Cocktail;