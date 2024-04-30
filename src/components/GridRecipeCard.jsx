import { Link } from "react-router-dom"

const GridRecipeCard = ({ recipe }) => {
    // console.log(recipe);
    return (
        <>
            <div className="col-12 col-md-6 col-lg-3 mb-2" key={recipe.idMeal}>
                <div className="card recipe-card p-2">
                    <div className="img-container mb-2">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="img-fluid" />
                    </div>

                    <div className="recipe-info">
                        <h5>Name: {recipe.strMeal}</h5>
                        <p className="mb-1">
                            <span>Area: </span> {recipe.strArea}
                        </p>
                        <p className="mb-1">
                            <span>Category:</span> {recipe.strCategory}
                        </p>
                        <Link to={`/recipe/${recipe.idMeal}`} className="btn btn-success">
                            See Details
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GridRecipeCard