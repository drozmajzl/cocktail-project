import { NavLink } from "react-router-dom";
import RecipeForm from "./RecipeForm";


function NavBar({ handleSearch, search, handleCategoryFilter, categoryFilter }){

    return(
    <nav className="topnav">
        {/* {searchbar, category dropdown?, create new cocktail button} */}
        <input type="text" placeholder="Search.." value={search} onChange={handleSearch}></input>
        <select name="categories" id="categories" value={categoryFilter} onChange={handleCategoryFilter}>
            <option value="All">All</option>
            <option value="Classic">Classic</option>
            <option value="Basic">Basic</option>
            <option value="Tiki">Tiki</option>
            <option value="Latin">Latin</option>
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