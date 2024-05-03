import axios from "axios";
import { useEffect, useState } from "react";

const urlCategories = 'list.php?c=list'
const urlArea = 'list.php?a=list'
const urlIngredients = 'list.php?i=list'

let a = 0;
let b = 30;

const AdvanceSearch = () => {
  const [selectedFilterOption, setSelectedFilterOption] = useState({
    totalOptionsList: '',
    displayedOptionsList: ''
  })

  const getFilterOptions = async () => {
    try {
      // const response = await axios.get(`${import.meta.env.VITE_URL}${urlCategories}`)
      // const response = await axios.get(`${import.meta.env.VITE_URL}${urlArea}`)
      const response = await axios.get(`${import.meta.env.VITE_URL}${urlIngredients}`)
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

  // console.log(selectedFilterOption);

  useEffect(() => {
    getFilterOptions()
  }, [])

  // console.log(selectedFilterOption);

  const displayAdditionalOptions = (term) => {
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
      setSelectedFilterOption(oldData => ({
        ...oldData,
        displayedOptionsList: oldData.totalOptionsList.slice(-30)
      }))
    } else {
      setSelectedFilterOption(oldData => ({
        ...oldData,
        displayedOptionsList: oldData.totalOptionsList.slice(a, b)
      }))
    }
    // console.log(a, b);
  }

  // console.log(selectedFilterOption.displayedOptionsList.length);

  const handleSubmit = e => {
    e.preventDefault()

    const availableOptions = Array.from(e.target.elements)

    const selectedOption = availableOptions
      .filter(options => options.checked)
      .map(options => options.id)

    console.log(selectedOption);
  }

  return (
    <div className="my-5">
      <section>
        {/* FORM - Select filter option */}
        <form className="btn-group d-flex flex-column align-items-center mb-4" onSubmit={handleSubmit}>
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
            <button className="btn btn-primary px-4 mx-5 btn-prev" onClick={() => displayAdditionalOptions('minus')}>
              Prev
            </button>
            <button className="btn btn-primary px-4 mx-5 btn-next" onClick={() => displayAdditionalOptions('plus')}>
              Next
            </button>
          </div>
        )}
      </section>


    </div>
  )
}

export default AdvanceSearch