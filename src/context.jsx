import { createContext, useContext, useState } from "react";
import axios from "axios";
import { getRecipeDetails } from "./utils/getRecipeDetails";

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    //search feature
    const [searchTerm, setSearchTerm] = useState('')
    const [searchTermResults, setSearchTermResults] = useState({})

    const getRecipesBySearchTerm = async (searchTerm) => {
        // console.log(searchTerm);
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL}search.php?s=${searchTerm}`)
            // console.log(response);
            const results = response.data
            // console.log(results);
            setSearchTermResults(results.meals);
        } catch (error) {
            console.log(error);
        }
    }

    //recipe details
    const [recipeDetails, setRecipeDetails] = useState({})

    const getSelectedRecipeDetails = async (id) => {
        // console.log(id);
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


    const displaySelectedOptionRecipe = async (filterURL, selectedOption) => {
        // console.log(filterURL);
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL}${filterURL}${selectedOption}`)
            // console.log(response);
            const results = response.data.meals
            // console.log(results);
            setSelectedFilterOptionResults(results)
        } catch (error) {
            console.log(error);
        }
    }

    const displayFilterOptions = async (urlType) => {
        // console.log(urlType);
        try {
            // const response = await axios.get(`${import.meta.env.VITE_URL}${urlCategories}`)
            // const response = await axios.get(`${import.meta.env.VITE_URL}${urlArea}`)
            // const response = await axios.get(`${import.meta.env.VITE_URL}${urlIngredients}`)
            const response = await axios.get(`${import.meta.env.VITE_URL}${urlType}`)
            // console.log(response);
            const results = response.data.meals
            // console.log(results);
            setSelectedFilterOption({
                totalOptionsList: results,
                displayedOptionsList: results.length > 30 ? results.slice(0, 30) : results
            })
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
        selectedFilterOption,
        setSelectedFilterOption,
        filterURL,
        setFilterURL,
        selectedOption,
        setSelectedOption,
        selectedFilterOptionResults,
        setSelectedFilterOptionResults,
        displaySelectedOptionRecipe,
        displayFilterOptions
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)