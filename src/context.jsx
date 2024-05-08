import { createContext, useContext, useState } from "react";
import axios from "axios";
import { getRecipeDetails } from "./utils/getRecipeDetails";

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    //search feature
    const [searchTerm, setSearchTerm] = useState('')
    const [searchTermResults, setSearchTermResults] = useState({})

    const getRecipesBySearchTerm = async (searchTerm) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL}search.php?s=${searchTerm}`)
            const results = response.data
            setSearchTermResults(results.meals);
        } catch (error) {
            console.log(error);
        }
    }

    //recipe details
    const [recipeDetails, setRecipeDetails] = useState({})
    const [previousPagePath, setPreviousPagePath] = useState('')

    const getSelectedRecipeDetails = async (id) => {
        const recipeData = await getRecipeDetails('lookup.php?i=', id)
        setRecipeDetails(recipeData)
    }

    const getRandomRecipeDetails = async () => {
        const recipeData = await getRecipeDetails('random.php')
        setRecipeDetails(recipeData)
    }

    //advance search
    const [selectedFilterOption, setSelectedFilterOption] = useState({
        totalOptionsList: '',
        displayedOptionsList: ''
    })
    const [filterURL, setFilterURL] = useState('')
    const [selectedOption, setSelectedOption] = useState('')
    const [selectedFilterOptionResults, setSelectedFilterOptionResults] = useState({})

    const displayFilterOptions = async (urlType) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL}${urlType}`)
            const results = response.data.meals
            setSelectedFilterOption({
                totalOptionsList: results,
                displayedOptionsList: results.length > 30 ? results.slice(0, 30) : results
            })
        } catch (error) {
            console.log(error);
        }
    }

    const displaySelectedOptionRecipe = async (filterURL, selectedOption) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL}${filterURL}${selectedOption}`)
            const results = response.data.meals
            setSelectedFilterOptionResults(results)
            setPreviousPagePath('search')
        } catch (error) {
            console.log(error);
        }
    }

    return <AppContext.Provider value={{
        getRecipesBySearchTerm, // SearchByNameForm.jsx
        searchTerm, // SearchResults.jsx
        setSearchTerm, // SearchByNameForm.jsx
        searchTermResults, // SearchResults.jsx 
        getSelectedRecipeDetails, // SelectedRecipe.jsx
        recipeDetails, // SelectedRecipe.jsx - RandomRecipe.jsx
        getRandomRecipeDetails, // RandomRecipe.jsx
        previousPagePath, // GridRecipeCard.jsx
        selectedFilterOption, // AvailableOptions.jsx
        setSelectedFilterOption, // AvailableOptions.jsx
        filterURL, // AdvanceSearch.jsx
        setFilterURL, // RadioButtonOptions.jsx
        selectedOption, // AdvanceSearch.jsx
        setSelectedOption, // AvailableOptions.jsx
        selectedFilterOptionResults, // AdvanceSearch.jsx
        displayFilterOptions, // RadioButtonOptions.jsx
        displaySelectedOptionRecipe // AdvanceSearch.jsx
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)