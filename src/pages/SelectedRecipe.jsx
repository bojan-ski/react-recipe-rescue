import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import RecipeDetails from "../components/RecipeDetails";

const SelectedRecipe = () => {
    const params = useParams()
    const { getSelectedRecipeDetails, recipeDetails } = useGlobalContext()
    // console.log(params.id);

    useEffect(() => {
        getSelectedRecipeDetails(params.id)
    }, [])

    return <RecipeDetails recipeDetails={recipeDetails} />
}

export default SelectedRecipe