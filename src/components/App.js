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
  const [categoryFilter, setCategoryFilter] = useState('All');

  function handleNewCocktail(newCocktail) {
    const updatedList = [...cocktails, newCocktail];
    setCocktails(updatedList);
  }

  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(search)
  }

  function handleCategoryFilter(e){
    setCategoryFilter(e.target.value);
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
        <Home />
      </Route >
      <Route exact path="/menu">
        <CocktailList list={cocktails} search={search} categoryFilter={categoryFilter}/>
      </Route>
      <Route exact path="/addCocktail">
        <RecipeForm handleNewCocktail={handleNewCocktail} />
      </Route>
      </Switch>
    </div>
  );
}

export default App;