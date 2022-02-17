import '../App.css';
import {useState} from 'react';

function RecipeForm({handleNewCocktail}){
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [directions, setDirections] = useState('');
    const [imageURL, setImageURL] = useState('');

    const newCocktail = {
        "name": name,
        "ingredients": ingredients,
        "category": category,
        "directions": directions,
        "description": description,
        "image": imageURL ? imageURL : 'https://media.istockphoto.com/photos/empty-cocktail-glass-isolated-on-white-background-picture-id1138785313?k=20&m=1138785313&s=612x612&w=0&h=H3TeWlcnbvoJMMeDj2vKBAKcrVY-0NbrsvlM5HKYa5o=',
        "personalFavorite":false,
        "userAdded": true
      };

      function handleSubmitIngredient(e) {
          e.preventDefault()
          const updatedIngredients = [...ingredients, {
              "ingredient": ingredient,
              "quantity": quantity
          } ]
          setIngredients(updatedIngredients)
          setIngredient('')
          setQuantity('')
      }

      function handleDeleteIngredient(e) {
          const revisedIngredients = ingredients.filter(ingredient => `${ingredient.quantity} ${ingredient.ingredient}` !== e.target.previousSibling.textContent)
          setIngredients(revisedIngredients);
      }

//TODO THROW ERROR IF NO CATEGORY IS SELECTED

      function handleSubmit(e) {
          e.preventDefault();
          switch (true) {
            case (newCocktail.name.length < 1):
                alert("Please enter the cocktail's name.");
                break;
            case (!newCocktail.category):
                alert("Please select a category.");
                break;
            case (newCocktail.ingredients.length < 1):
                alert("Please enter ingredients.");
                break;
            case (newCocktail.description.length < 1):
                alert("Please enter a description.");
                break;
            case (newCocktail.directions.length < 1):
                alert("Please enter directions.");
                break;
            default:
                fetch("http://localhost:3000/cocktails",{
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(
                        newCocktail
                    ),
                })
                .then (()=>handleNewCocktail());
                
                setName('');
                setCategory('');
                setIngredients([]);
                setDescription('');
                setDirections('');
                setImageURL('');     
                setIngredient('');
                setQuantity('');
        }
      }

    const ingredientsDisplay = ingredients.map(ingredient => (
        <div key={`${ingredient.ingredient}Div`}>
            <li key={ingredient.ingredient}>{ingredient.quantity} {ingredient.ingredient}</li>
            <button key={`${ingredient.ingredient}Button`} id="deleteIngredient" onClick={handleDeleteIngredient}>X</button>
        </div>
    ));

    return(
        <div className="form-container">
        <div className="form-card">
            <h1>Add a New Cocktail Recipe</h1>
            <form>
                <label>Cocktail Name:</label>
                <br/>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <br/>
                <label>Category:</label><br/>
                <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="select">Select category...</option>
                    <option value="classic">Classic</option>
                    <option value="basic">Basic</option>
                    <option value="tiki">Tiki</option>
                    <option value="latin">Latin</option>
                    <option value="other">Other</option>
                </select>
                <br/>
            </form>
            <form name="ingredients" onSubmit={handleSubmitIngredient}>
                    <label>Ingredient:</label>
                    <br/>
                    <input className="ingredient-input" type="text" name="ingredient" value={ingredient} onChange={(e) => setIngredient(e.target.value)}></input>
                    <br/>
                    <label>Quantity:</label>
                    <br/>
                    <input className="ingredient-input" type="text" name="quantity" id="ingredientQuantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
                    <br/>
                    <input className="button-29" type="submit" name="addIngredient" value="Add Ingredient" id="ingredientName"></input>
                    {/* Take ingredient + quantity inputs, create object, add object to array of ingredients (in state), */}
            </form>
            {ingredientsDisplay}
            <form onSubmit={handleSubmit}>
            <label>Description:</label>
                <br/>
                <textarea className="d-input"type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <br/>
                <label>Directions:</label>
                <br/>
                <textarea className="d-input"type="text" name="directions" value={directions} onChange={(e) => setDirections(e.target.value)}></textarea>
                <br/>
                <label>Add Image (Optional):</label>
                <br/>
                <input type="text" name="Image" value={imageURL} onChange={(e) => setImageURL(e.target.value)}></input>
                <br/>
                <input className="button-29" type="submit" value="Submit Cocktail"></input>
            </form>
        </div>
        </div>
    )
}

export default RecipeForm;