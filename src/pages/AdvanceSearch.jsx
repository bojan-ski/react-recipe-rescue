import axios from "axios";
// import { useEffect } from "react";
import { useState } from "react";
import { selectFilterOption } from "../utils/selectFilterOption";

// const urlCategories = 'list.php?c=list'
// const urlArea = 'list.php?a=list'
// const urlIngredients = 'list.php?i=list'

let a = 0;
let b = 30;

const AdvanceSearch = () => {
  const [selectedFilterOption, setSelectedFilterOption] = useState({
    totalOptionsList: '',
    displayedOptionsList: ''
  })
  const [selectedOption, setSelectedOption] = useState('')

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
        displayedOptionsList: results.length > 30 ? results.slice(a, b) : results
      })
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmitRadioOption = e => {
    e.preventDefault()

    const urlType = selectFilterOption(Array.from(e.target.elements))

    if (urlType === "ingredients") {
      displayFilterOptions('list.php?i=list')
    } else if (urlType === "area") {
      displayFilterOptions('list.php?a=list')
    } else {
      displayFilterOptions('list.php?c=list')
    }
  }

  const handleSubmitFilterOption = e => {
    e.preventDefault()

    setSelectedOption(selectFilterOption(Array.from(e.target.elements)))
  }

  console.log(selectedOption);

  const displayAdditionalIngredientsOptions = (term) => {
    // console.log(term);
    // console.log(a, b);

    if (term === 'plus') {
      a += 30
      b += 30
    }

    if (term === 'minus') {
      a -= 30
      b -= 30
    }

    if (b === 0) {
      setSelectedFilterOption(currData => ({
        ...currData,
        displayedOptionsList: currData.totalOptionsList.slice(-30)
      }))
    } else {
      setSelectedFilterOption(currData => ({
        ...currData,
        displayedOptionsList: currData.totalOptionsList.slice(a, b)
      }))
    }
    // console.log(a, b);
  }

  return (
    <div className="my-5">
      {/* FORM - Select filter options */}
      <section className="mb-3">
        <form className="w-50 mx-auto" onSubmit={handleSubmitRadioOption}>
          {/* radio btns */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="d-flex">
              <div className="form-check">
                <label htmlFor="categories" className="form-check-label">
                  Categories
                </label>
                <input type="radio" id="categories" name="radio" className="form-check-input" defaultChecked />
              </div>
              <div className="form-check ms-3">
                <label htmlFor="area" className="form-check-label">
                  Area
                </label>
                <input type="radio" id="area" name="radio" className="form-check-input" />
              </div>
              <div className="form-check ms-3">
                <label htmlFor="ingredients" className="form-check-label">
                  Ingredients
                </label>
                <input type="radio" id="ingredients" name="radio" className="form-check-input" />
              </div>
            </div>

            {/* btn - submit */}
            <button className="btn btn-dark text-white fw-bold border-warning" type="submit">
              Search
            </button>
          </div>
        </form>
      </section>


      {/* FORM - Select available filter option */}
      <section>
        <form className="btn-group d-flex flex-column align-items-center mb-4" onSubmit={handleSubmitFilterOption}>
          <div className="row mb-4 text-center mb-4">
            {selectedFilterOption.displayedOptionsList && (selectedFilterOption.displayedOptionsList.map(option => {
              // console.log(option);
              const name = option.strArea || option.strCategory || option.strIngredient

              return (
                <div className="col-6 col-md-4 col-lg-2 mb-2">
                  <input type="radio" className="btn-check" name="options-base" id={name} value={name} autoComplete="off" />
                  <label className="btn" htmlFor={name}>
                    {name}
                  </label>
                </div>
              )
            }))}
          </div >

          <button type="submit" className="btn bg-success rounded fw-bold text-uppercase w-50">
            submit
          </button>
        </form>

        {selectedFilterOption.displayedOptionsList.length >= 30 && (
          <div className="btn-container mt-3">
            <button className="btn btn-primary px-4 mx-5 btn-prev" onClick={() => displayAdditionalIngredientsOptions('minus')}>
              Prev
            </button>
            <button className="btn btn-primary px-4 mx-5 btn-next" onClick={() => displayAdditionalIngredientsOptions('plus')}>
              Next
            </button>
          </div>
        )}
      </section>


    </div>
  )
}

export default AdvanceSearch