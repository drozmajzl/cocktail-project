import '../App.css';
import CocktailList from './CocktailList';
import NavBar from './NavBar';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import RecipeForm from './RecipeForm';

function App() {
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
        <CocktailList />
      </Route>
      <Route exact path="/addCocktail">
        <RecipeForm />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
