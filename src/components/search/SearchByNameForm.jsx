import { useGlobalContext } from "../../context";

const SearchByNameForm = () => {
  const { setSearchTerm, getRecipesBySearchTerm } = useGlobalContext()

  const handleSubmitSearchTerm = e => {
    e.preventDefault()
    
    setSearchTerm(e.target.searchTerm.value.toLowerCase().trim());
    getRecipesBySearchTerm(e.target.searchTerm.value)
    e.target.searchTerm.value = ''
  }

  return (
    <section className="search-form-section mt-4">
      <h3 className="text-center mb-3">
        You have a recipe in mind?
      </h3>

      <form className="w-50 mx-auto d-flex justify-content-center align-items-center" onSubmit={handleSubmitSearchTerm}>
        {/* input field */}
        <input type="text" name="searchTerm" id="searchTerm" className="search-form-input w-75" placeholder="Enter search term (recipe)" required />

        {/* btn - submit */}
        <button className="btn btn-success" type="submit">
          Search
        </button>
      </form>
    </section>
  )
}

export default SearchByNameForm