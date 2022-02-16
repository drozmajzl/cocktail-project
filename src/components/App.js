import '../App.css';
import {useState, useEffect} from 'react';
import CocktailList from './CocktailList';
import NavBar from './NavBar';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import RecipeForm from './RecipeForm';

function App() {
  const [cocktails, setCocktails]=useState([]);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  function handleNewCocktail() {
    fetch('http://localhost:3000/cocktails')
      .then(r=>r.json())
      .then(data=>setCocktails(data))
    // const updatedList = [...cocktails, newCocktail];
    // setCocktails(updatedList);
  }
  console.log(cocktails)

  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(search)
  }

  function handleCategoryFilter(e){
    setCategoryFilter(e.target.value);
  }

  function updateFavorites(updatedCocktail){
    const newFavorites = cocktails.map(cocktail=>{
      if (cocktail.id===updatedCocktail.id){
        return updatedCocktail
      }
      else {
        return cocktail
      }
    })
    setCocktails(newFavorites)
  }

  function handleRemove(cocktailToRemove){
    const revisedList = cocktails.filter(cocktail => cocktail.id !== cocktailToRemove);
    fetch(`http://localhost:3000/cocktails/${cocktailToRemove}`, {
      method: 'DELETE',
  })
    setCocktails(revisedList);
  }

  useEffect(()=>{
      fetch('http://localhost:3000/cocktails')
      .then(r=>r.json())
      .then(data=>setCocktails(data))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar handleSearch={handleSearch} search={search} handleCategoryFilter={handleCategoryFilter} categoryFilter={categoryFilter}/>
      </header>
      <Switch>
      <Route exact path="/">
        <Home cocktails={cocktails} handleRemove={handleRemove} updateFavorites={updateFavorites}/>
      </Route >
      <Route exact path="/menu">
        <CocktailList list={cocktails} search={search} categoryFilter={categoryFilter} updateFavorites={updateFavorites} handleRemove={handleRemove}/>
      </Route>
      <Route exact path="/addCocktail">
        <RecipeForm handleNewCocktail={handleNewCocktail} />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
