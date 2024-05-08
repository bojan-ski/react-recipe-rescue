import GridRecipeCard from "./GridRecipeCard";

const RecipeList = ({ listOfRecipes }) => {
    // console.log(listOfRecipes);

    return (
        <>
            <div className="row justify-content-center">
                {listOfRecipes.length > 0 ? (listOfRecipes.map(recipe => {
                    // console.log(recipe);
                    return <GridRecipeCard key={recipe.idMeal} recipe={recipe}/>
                })) : (
                    ""
                )}
            </div>
        </>
    )
}

export default RecipeList