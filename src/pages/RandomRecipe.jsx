import { useEffect } from "react";
import { useGlobalContext } from "../context"
import RecipeDetails from "../components/RecipeDetails";

const RandomRecipe = () => {
    const { getRandomRecipeDetails, recipeDetails } = useGlobalContext()

    useEffect(() => {
        getRandomRecipeDetails()
    }, [])

    return <RecipeDetails recipeDetails={recipeDetails} getRandomRecipeDetails={getRandomRecipeDetails} />
}

export default RandomRecipe