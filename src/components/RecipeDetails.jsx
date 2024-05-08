import { Link, useSearchParams } from "react-router-dom";

const RecipeDetails = ({ recipeDetails, getRandomRecipeDetails }) => {
    const [searchParams] = useSearchParams()
    const backPath = searchParams.get("ref")

    const ingredients = Object.keys(recipeDetails)
        .filter((key) => key.startsWith('strIngredient') && recipeDetails[key] !== '' && recipeDetails[key] !== null)
        .map((key) => recipeDetails[key]);

    const measure = Object.keys(recipeDetails)
        .filter((key) => key.startsWith('strMeasure') && recipeDetails[key] !== " " && recipeDetails[key] !== "")
        .map((key) => recipeDetails[key]);

    return (
        <>
            <div className="container my-5">
                <section className="recipe-details-header d-flex align-items-center mb-4">
                    <div className="btn-container w-50">
                        {getRandomRecipeDetails ? (
                            <button type="button" className="btn btn-warning" onClick={() => getRandomRecipeDetails()}>
                                New Suggestion
                            </button>
                        ) : (
                            <Link to={backPath === 'search' ? '/search' : '/'} className="btn btn-success px-4">
                                Back
                            </Link>
                        )}
                    </div>

                    <div className="title-container w-50 text-center">
                        <h2>
                            {recipeDetails.strMeal}
                        </h2>
                    </div>
                </section>

                <section className="recipe-details-main">
                    <div className="row">

                        {/* row item 1 */}
                        <div className="col-12 col-md-6 mb-4">
                            <img src={recipeDetails.strMealThumb} alt={recipeDetails.strMeal} className="img-fluid rounded border border-secondary" />
                        </div>

                        {/* row item 2 */}
                        <div className="col-12 col-md-6 mb-4">
                            <p className="mb-1">
                                <span>Recipe origin: </span> {recipeDetails.strArea}
                            </p>
                            <p className="mb-1">
                                <span>Category:</span> {recipeDetails.strCategory}
                            </p>
                            <p className="mb-1">
                                <span>Ingredients:</span>
                            </p>
                            <ul>
                                {ingredients.map((item, idx) => {
                                    return (
                                        <li key={idx} className="">
                                            {item}: {measure[idx]} {idx < ingredients.length - 1 ? ',' : ''}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* row item 3 */}
                        <div className="col-12">
                            <h5 className="text-center">
                                How to prepare the meal:
                            </h5>
                            <p>
                                {recipeDetails.strInstructions}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default RecipeDetails