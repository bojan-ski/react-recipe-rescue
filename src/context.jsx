import { createContext, useContext, useState } from "react";
import axios from "axios";

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [listOfRecipes, setListOfRecipes] = useState({})

    const getData = async (searchTerm) => {
        console.log(searchTerm);
        try {
            const response = await axios.get(`${apiUrl}${searchTerm}`)
            // console.log(response);
            const results = response.data
            setListOfRecipes(results.meals);      
        } catch (error) {
            console.log(error);
        }
    }

    // console.log(listOfRecipes);

    return <AppContext.Provider value={{ getData, searchTerm, setSearchTerm, listOfRecipes }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)