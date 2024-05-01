import axios from "axios"

export const getRecipeDetails = async (path, id = '') => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_URL}${path}${id}`)
        // console.log(response);
        const result = response.data.meals[0]
        // console.log(result);
        return result
    } catch (error) {
        console.log(error);
    }
}