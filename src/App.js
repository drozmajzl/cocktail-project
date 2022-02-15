import './App.css';
import CocktailList from './components/CocktailList';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import RecipeForm from './components/RecipeForm';

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
