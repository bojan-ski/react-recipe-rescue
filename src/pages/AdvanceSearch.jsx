import {  useEffect } from "react";
import RecipeList from "../components/RecipeList";
import { useGlobalContext } from "../context";
import RadioButtonOptions from "../components/advanceSearch/advanceSearch";
import AvailableOptions from "../components/advanceSearch/AvailableOptions";

const AdvanceSearch = () => {
  const { displaySelectedOptionRecipe, filterURL, selectedOption, selectedFilterOptionResults } = useGlobalContext()

  // console.log(filterURL);
  // console.log(selectedOption);
  // console.log(selectedFilterOptionResults);

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
      ): (
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