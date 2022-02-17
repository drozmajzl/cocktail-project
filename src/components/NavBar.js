import '../App.css';
import { NavLink } from "react-router-dom";



function NavBar(){
  
    return(
    <nav className="topnav">
        <NavLink
        to="/"
        exact
        >
        <button className="button-28" type="button">
        ⌂
        </button>
        </NavLink>
        <NavLink
        to="/menu"
        exact
        >
        <button className="button-28" type="button">
        &#128441;
        </button>
      </NavLink>
      <NavLink
        to="/addCocktail"
        exact
        >
        <button className="button-28" type="button">
        🍸 Add!
        </button>
      </NavLink>
    </nav>
    )
}

export default NavBar;