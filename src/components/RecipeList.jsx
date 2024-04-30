import { useGlobalContext } from "../context"
import GridRecipeCard from "./GridRecipeCard";

const RecipeList = () => {
    const { searchTerm, listOfRecipes } = useGlobalContext()
    // console.log(listOfRecipes);

    return (
        <section className="mt-5">
            <div className="container">
                {searchTerm ? (
                    <h2 className="text-center mb-4">
                        Search results for: {searchTerm}
                    </h2>
                ) : (
                    ''
                )}

                <div className="row">
                    {listOfRecipes.length > 0 ? (listOfRecipes.map(recipe => {
                        // console.log(recipe);

                        return <GridRecipeCard recipe={recipe}/>
                    })) : (
                        ""
                    )}
                </div>
            </div>
        </section>
    )
}

export default RecipeList