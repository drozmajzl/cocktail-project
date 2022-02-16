import Cocktail from "./Cocktail";

function Home({ cocktails }){

const favorited=(cocktails.filter(cocktail=>cocktail.personalFavorite))
const displayCocktails=favorited.map(cocktail=><Cocktail key={cocktail.id} cocktail={cocktail}/>)

return(
    <div>
        <h1>HOME PAGE</h1>
        {displayCocktails}
    </div>
    )
}

export default Home;