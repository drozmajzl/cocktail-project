import '../App.css';
import { NavLink } from "react-router-dom";


function NavBar(){
  
    return(
    <nav className="topnav">
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