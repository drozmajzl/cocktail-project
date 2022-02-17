import '../App.css';
import { NavLink, useRouteMatch } from "react-router-dom";



function NavBar(){
  let homeRoute = useRouteMatch({exact: true, path: '/'});

  
    return(
    <nav className="topnav">
      <h1 className="logo">Dealer's Choice</h1>
        <NavLink
        to="/"
        exact
        >
        {homeRoute ? null : 
        <button className="button-28" type="button">
        ⌂
        </button>}
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
        🍸 Submit a Cocktail🍸
        </button>
      </NavLink>
    </nav>
    )
}

export default NavBar;