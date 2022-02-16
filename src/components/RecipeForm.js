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
        "personalFavorite":false
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

      function handleSubmit(e) {
          e.preventDefault();
          console.log(newCocktail);
          handleNewCocktail(newCocktail);
        //   ADD POST FUNCTIONALITY
        fetch("http://localhost:3000/cocktails",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
                newCocktail
            ),
          })
      


        setName('');
        setCategory('');
        setIngredients([]);
        setDescription('');
        setDirections('');
        setImageURL('');     
        setIngredient('');
        setQuantity('');   
      }

    const ingredientsDisplay = ingredients.map(ingredient => (
        <li key={ingredient.ingredient}>{ingredient.quantity} {ingredient.ingredient}</li>
    ));

    console.log(ingredients);

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
            <form name="ingredients" onSubmit={handleSubmitIngredient}>
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
            {ingredientsDisplay}
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