import { createContext, useContext, useState } from "react";
import axios from "axios";

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [listOfRecipes, setListOfRecipes] = useState({})
    const [recipeDetails, setRecipeDetails] = useState({})

    const getData = async (searchTerm) => {
        // console.log(searchTerm);
        try {
            const response = await axios.get(`${apiUrl}search.php?s=${searchTerm}`)
            // console.log(response);
            const results = response.data
            setListOfRecipes(results.meals);      
        } catch (error) {
            console.log(error);
        }
    }

    const getRecipeDetails = async (id) => {
        // console.log(id);
        try {
            const response = await axios.get(`${apiUrl}lookup.php?i=${id}`)
            // console.log(response);
            const results = response.data.meals[0]
            // console.log(results);
            setRecipeDetails(results)
        } catch (error) {
            console.log(error);
        }
    }

    // console.log(listOfRecipes);
    // console.log(recipeDetails);

    return <AppContext.Provider value={{ getData, searchTerm, setSearchTerm, listOfRecipes, getRecipeDetails, recipeDetails }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)