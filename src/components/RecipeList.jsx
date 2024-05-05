import GridRecipeCard from "./GridRecipeCard";

const RecipeList = ({ listOfRecipes }) => {
    // console.log(listOfRecipes);

    return (
        <>
            <div className="row">
                {listOfRecipes.length > 0 ? (listOfRecipes.map(recipe => {
                    // console.log(recipe);
                    return <GridRecipeCard recipe={recipe} />
                })) : (
                    ""
                )}
            </div>
        </>
    )
}

export default RecipeList