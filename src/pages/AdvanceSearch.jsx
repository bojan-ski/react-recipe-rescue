import { useEffect } from "react";
import { useGlobalContext } from "../context";
import RadioButtonOptions from "../components/advanceSearch/RadioButtonOptions";
import AvailableOptions from "../components/advanceSearch/AvailableOptions";
import RecipeList from "../components/RecipeList";

const AdvanceSearch = () => {
  const { displaySelectedOptionRecipe, filterURL, selectedOption, selectedFilterOptionResults } = useGlobalContext()

  useEffect(() => {
    displaySelectedOptionRecipe(filterURL, selectedOption)
  }, [selectedOption])

  return (
    <div className="container my-5">
      {/* FORM - Select filter options */}
      <RadioButtonOptions />

      {/* FORM - Select available option */}
      <AvailableOptions />

      {/* List of recipes - filter results */}
      {selectedFilterOptionResults ? (
        <RecipeList listOfRecipes={selectedFilterOptionResults} />
      ) : (
        <>
          <h2 className="text-center">
            No available recipes, please try something else
          </h2>
        </>
      )}
    </div>
  )
}

export default AdvanceSearch