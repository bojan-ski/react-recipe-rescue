import { useGlobalContext } from "../../context"
import { selectFilterOption } from "../../utils/selectFilterOption"

const RadioButtonOptions = () => {
    const {setFilterURL, displayFilterOptions} = useGlobalContext()

    const handleSubmitRadioOption = e => {
        e.preventDefault()

        const urlType = selectFilterOption(Array.from(e.target.elements))

        if (urlType === "ingredients") {
            displayFilterOptions('list.php?i=list')
            setFilterURL('filter.php?i=')
        } else if (urlType === "area") {
            displayFilterOptions('list.php?a=list')
            setFilterURL('filter.php?a=')
        } else {
            displayFilterOptions('list.php?c=list')
            setFilterURL('filter.php?c=')
        }
    }

    return (
        <section className="radio-options mb-3">
            <form className="w-50 mx-auto" onSubmit={handleSubmitRadioOption}>
                {/* radio btns */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div className="d-flex mb-3 mb-md-0 me-4">
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
                    <button className="btn btn-success fw-bold px-4" type="submit">
                        Select
                    </button>
                </div>
            </form>
        </section>
    )
}

export default RadioButtonOptions