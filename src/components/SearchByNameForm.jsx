import { useGlobalContext } from "../context";

const SearchByNameForm = () => {
  const { getData, setSearchTerm } = useGlobalContext()

  const handleSubmit = e => {
    e.preventDefault()
    // console.log(e.target.searchTerm.value);
    setSearchTerm(e.target.searchTerm.value.toLowerCase().trim());

    getData(e.target.searchTerm.value)
  }

  return (
    <section className="mt-4">
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

export default SearchByNameForm