import { Link } from "react-router-dom"
import { useGlobalContext } from "../context";

const GridRecipeCard = ({ recipe }) => {
    const { previousPagePath } = useGlobalContext()

    let pageURL = `/recipe/${recipe.idMeal}`;

    if (previousPagePath !== '') {
        pageURL += `?ref=${previousPagePath}`
    }

    return (
        <>
            <div className="col-12 col-md-6 col-lg-3 mb-2">
                <div className="card recipe-card">
                    <div className="img-container mb-2">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="img-fluid" />
                    </div>

                    <div className="recipe-info p-2">
                        <h5>{recipe.strMeal}</h5>
                        <p className="mb-1">
                            <span>Area: </span> {recipe.strArea}
                        </p>
                        <p className="mb-1">
                            <span>Category:</span> {recipe.strCategory}
                        </p>
                        <Link to={pageURL} className="btn btn-success">
                            See Details
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GridRecipeCard