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
        <button className="button-28" id="home-button" type="button">
        Home
        </button>}
        </NavLink>
        <NavLink
        to="/menu"
        exact
        >
        <button className="button-28 non-home-menu-buttons" type="button">
        &#128441;
        </button>
      </NavLink>
      <NavLink
        to="/addCocktail"
        exact
        >
        <button className="button-28 non-home-menu-buttons" type="button">
        🍸 Submit a Cocktail🍸
        </button>
      </NavLink>
      {homeRoute ? <p id="home-heading">Welcome. Scroll down for some favorite cocktails.</p> : null}
    </nav>
    )
}

export default NavBar;