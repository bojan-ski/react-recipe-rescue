import { useGlobalContext } from "../context"
import RecipeList from './RecipeList'

const SearchResults = () => {
    const { searchTerm, searchTermResults } = useGlobalContext()
    // console.log(searchTermResults);

    if (!searchTermResults) {
        return <section className="search-results-section mt-5">
            <h2 className="text-center">
                No search results found, please try a new recipe (recipe name)
            </h2>
        </section>
    }

    return (
        <>
            <section className="search-results-section mt-5">
                <div className="container">
                    {searchTerm ? (
                        <h2 className="text-center mb-4">
                            Search results for: {searchTerm.toUpperCase()}
                        </h2>
                    ) : (
                        ''
                    )}

                    <RecipeList listOfRecipes={searchTermResults}/>
                </div>
            </section>
        </>
    )
}

export default SearchResults