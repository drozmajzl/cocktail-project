import '../App.css';
import Cocktail from "./Cocktail";

function Home({ cocktails, handleRemove, updateFavorites }){

const favorited=(cocktails.filter(cocktail=>cocktail.personalFavorite))
const displayCocktails=favorited.map(cocktail=><Cocktail key={cocktail.id} cocktail={cocktail} handleRemove={handleRemove} updateFavorites={updateFavorites}/>)

return(
    <div>
        <h1>HOME PAGE</h1>
        {displayCocktails}
    </div>
    )
}

export default Home;