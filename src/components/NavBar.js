
import Filter from "./Filter";
import RecipeForm from "./RecipeForm";

function NavBar(){

    return(
    <nav className="topnav">
        {/* {searchbar, category dropdown?, create new cocktail button} */}
        <input type="text" placeholder="Search.."></input>
        <select name="catogories" id="categories">
            <option value="All">All</option>
            <option value="Classic">Classic</option>
            <option value="Classic">Basic</option>
            <option value="Classic">Tiki</option>
        </select>
        <button>Add New Cocktail Recipe</button>
    </nav>
    )
}

export default NavBar;