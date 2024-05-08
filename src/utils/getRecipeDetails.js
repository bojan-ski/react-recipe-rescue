import axios from "axios"

//function called in context.jsx:
export const getRecipeDetails = async (path, id = '') => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_URL}${path}${id}`)
        const result = response.data.meals[0]
        return result
    } catch (error) {
        console.log(error);
    }
}