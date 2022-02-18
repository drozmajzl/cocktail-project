import '../App.css';
import Cocktail from "./Cocktail";

function Home({ cocktails, handleRemove, updateFavorites }){

const favorited=(cocktails.filter(cocktail=>cocktail.personalFavorite))
const displayCocktails=favorited.map(cocktail=><Cocktail key={cocktail.id} cocktail={cocktail} handleRemove={handleRemove} updateFavorites={updateFavorites}/>)

return(
    <div className="home-cocktails">
        {displayCocktails}
    </div>
    )
}

export default Home;