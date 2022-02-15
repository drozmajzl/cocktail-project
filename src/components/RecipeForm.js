import {useState} from 'react';

function RecipeForm(){
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [ingredients, setIngredients] = useState('');
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
        "image": imageURL,
        "rating": 0,
      };

      function handleSubmit(e) {
          e.preventDefault();
          console.log(newCocktail);
          setName('');

      }

    return(
        <div>
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
            </select>
            <br/>
        </form>
        <form name="ingredients">
                <label>Ingredient:</label>
                <br/>
                <input type="text" name="ingredient" value={ingredient} onChange={(e) => setIngredient(e.target.value)}></input>
                <br/>
                <label>Quantity:</label>
                <br/>
                <input type="text" name="quantity" id="ingredientQuantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
                <input type="submit" name="addIngredient" value="Add Ingredient" id="ingredientName"></input>
                {/* Take ingredient + quantity inputs, create object, add object to array of ingredients (in state), */}
        </form>
        <form onSubmit={handleSubmit}>
        <label>Description:</label>
            <br/>
            <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <br/>
            <label>Directions:</label>
            <br/>
            <input type="text" name="directions" value={directions} onChange={(e) => setDirections(e.target.value)}></input>
            <br/>
            <label>Add Image (Optional):</label>
            <br/>
            <input type="text" name="Image" value={imageURL} onChange={(e) => setImageURL(e.target.value)}></input>
            <br/>
            <input type="submit" value="Submit Cocktail"></input>
        </form>
        </div>
    )
}

export default RecipeForm;