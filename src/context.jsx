import { createContext, useContext, useState } from "react";
import axios from "axios";
import { getRecipeDetails } from "./utils/getRecipeDetails";

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [listOfRecipes, setListOfRecipes] = useState({})
    const [recipeDetails, setRecipeDetails] = useState({})

    const getData = async (searchTerm) => {
        // console.log(searchTerm);
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL}search.php?s=${searchTerm}`)
            // console.log(response);
            const results = response.data
            // console.log(results);
            setListOfRecipes(results.meals);      
        } catch (error) {
            console.log(error);
        }
    }

    const getSelectedRecipeDetails = async (id) => {
        // console.log(id);
        const recipeData = await getRecipeDetails('lookup.php?i=', id)
        setRecipeDetails(recipeData) 
    }

    const getRandomRecipeDetails = async () => {    
        const recipeData = await getRecipeDetails('random.php')
        setRecipeDetails(recipeData)      
    }

    // console.log(listOfRecipes);
    // console.log(recipeDetails);

    return <AppContext.Provider value={{ getData, searchTerm, setSearchTerm, listOfRecipes, getSelectedRecipeDetails, recipeDetails, getRandomRecipeDetails }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)