import './App.css';
import CocktailList from './components/CocktailList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
        <CocktailList />
      
    </div>
  );
}

export default App;
