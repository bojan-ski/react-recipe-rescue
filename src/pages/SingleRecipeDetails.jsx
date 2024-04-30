import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const SingleRecipeDetails = () => {
    const { getRecipeDetails, recipeDetails } = useGlobalContext()
    const params = useParams()
    // console.log(params.id);

    useEffect(() => {
        getRecipeDetails(params.id)
    }, [])

    // console.log(recipeDetails);

    const ingredients = Object.keys(recipeDetails)
    .filter((key) => key.startsWith('strIngredient') && recipeDetails[key] !== '')
    .map((key) => recipeDetails[key]);
    
    const measure = Object.keys(recipeDetails)
    .filter((key) => key.startsWith('strMeasure') && recipeDetails[key] !== " ")
    .map((key) => recipeDetails[key]);

    // console.log(ingredients, measure);

    return (
        <div className="container my-5">
            <section className="recipe-details-header d-flex align-items-center justify-content-around mb-4">
                <Link to='/' className="btn btn-success px-4">
                    Back
                </Link>

                <h2>
                    {recipeDetails.strMeal}
                </h2>
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
                            <span>Meal origin: </span> {recipeDetails.strArea}
                        </p>
                        <p className="mb-1">
                            <span>Category:</span> {recipeDetails.strCategory}
                        </p>
                        <p>
                            <span>Ingredients:</span>
                            <ul>
                                {ingredients.map((item, idx) => {
                                    return (
                                        <li key={idx} className="">
                                            {item}: {measure[idx]} {idx < ingredients.length - 1 ? ',' : ''}
                                        </li>
                                    );
                                })}
                            </ul>                            
                        </p>
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
    )
}

export default SingleRecipeDetails