
import { NavLink } from "react-router-dom";
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
        <NavLink
        to="/"
        exact
        >
        <button type="button">
          Home
        </button>
        </NavLink>
        <NavLink
        to="/menu"
        exact
        >
        <button type="button">
          Menu
        </button>
      </NavLink>
      <NavLink
        to="/addCocktail"
        exact
        >
        <button type="button">
          Add A Cocktail!
        </button>
      </NavLink>
    </nav>
    )
}

export default NavBar;