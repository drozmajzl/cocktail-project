function RecipeForm(){
    return(
        <div>
        <h1>Add a New Cocktail Recipe</h1>
        <form>
            <label>Cocktail Name:</label>
            <br/>
            <input type="text" name="name"></input>
            <br/>
            <label>Category:</label><br/>
            <select name="catogory">
                <option value="classic">Classic</option>
                <option value="basic">Basic</option>
                <option value="tiki">Tiki</option>
            </select>
            <br/>
        </form>
        <form name="ingrendients">
                <label>Ingredient:</label>
                <br/>
                <input type="text" name="ingredient"></input>
                <br/>
                <label>Quantity:</label>
                <br/>
                <input type="text" name="quantity"></input>
                <input type="submit" name="addIngredient" value="Add Ingredient"></input>
        </form>
        <form>
        <label>Description:</label>
            <br/>
            <input type="text" name="description"></input>
            <br/>
            <label>Directions:</label>
            <br/>
            <input type="text" name="directions"></input>
            <br/>
            <label>Add Image (Optional):</label>
            <br/>
            <input type="text" name="Image"></input>
            <br/>
            <input type="submit" value="Submit Cocktail"></input>
        </form>
        </div>
    )
}

export default RecipeForm;