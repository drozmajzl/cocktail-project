import '../App.css';
import {useState, useEffect} from 'react';
import CocktailList from './CocktailList';
import NavBar from './NavBar';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import RecipeForm from './RecipeForm';

function App() {
  const [cocktails, setCocktails]=useState([])

  function handleNewCocktail(newCocktail) {
    const updatedList = [...cocktails, newCocktail];
    setCocktails(updatedList);
  }

  useEffect(()=>{
      fetch('http://localhost:3000/cocktails')
      .then(r=>r.json())
      .then(data=>setCocktails(data))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route >
      <Route exact path="/menu">
        <CocktailList list={cocktails}/>
      </Route>
      <Route exact path="/addCocktail">
        <RecipeForm handleNewCocktail={handleNewCocktail} />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
