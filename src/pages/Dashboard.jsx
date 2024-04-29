import axios from "axios"
import { useState } from "react"

const apiUrl= 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [listOfMeals, setListOfMeals] = useState({})

  const getData = async (searchTerm) =>{
    console.log(searchTerm);
    try {
      const response = await axios.get(`${apiUrl}${searchTerm}`)
      // console.log(response);
      const results = response.data
      // setListOfMeals(results.meals);      
    } catch (error) {
      console.log(error);
    }
  }

  console.log(listOfMeals);

  const handleSubmit = e => {
    e.preventDefault()
    console.log(e.target.searchTerm.value);
    setSearchTerm(e.target.searchTerm.value.toLowerCase().trim());

    getData(e.target.searchTerm.value)
  }

  return (
    <section>
      <h1 className="text-center mb-3">Dashboard</h1>

      <form className="w-50 mx-auto d-flex justify-content-center align-items-center" onSubmit={handleSubmit}>
        {/* input field */}
        <input type="text" name="searchTerm" id="searchTerm" className="search-form-input w-75" placeholder="Enter search term" required />

        {/* btn - submit */}
        <button className="btn border-success" type="submit">
          Search
        </button>
      </form>
    </section>
  )
}

export default Dashboard