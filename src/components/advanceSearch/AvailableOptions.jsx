import { useGlobalContext } from "../../context"
import { selectFilterOption } from "../../utils/selectFilterOption"

let pointA = 0
let pointB = 30

const AvailableOptions = () => {
    const { setSelectedOption, selectedFilterOption, setSelectedFilterOption } = useGlobalContext()

    const handleSubmitFilterOption = e => {
        e.preventDefault()

        setSelectedOption(selectFilterOption(Array.from(e.target.elements)))
    }

    const displayAdditionalIngredientsOptions = (term) => {
        // console.log(term);
        // console.log(a, b);

        if (term === 'plus') {
            pointA += 30
            pointB += 30
        }

        if (term === 'minus') {
            pointA -= 30
            pointB -= 30
        }

        if (pointB === 0) {
            setSelectedFilterOption(currData => ({
                ...currData,
                displayedOptionsList: currData.totalOptionsList.slice(-30)
            }))
        } else {
            setSelectedFilterOption(currData => ({
                ...currData,
                displayedOptionsList: currData.totalOptionsList.slice(pointA, pointB)
            }))
        }
        // console.log(a, b);
    }

    return (
        <>
            {selectedFilterOption.displayedOptionsList && (
                <section className="available-options mb-5">
                    {/* pagination for available options */}
                    {selectedFilterOption.displayedOptionsList.length >= 30 && (
                        <div className="btn-container text-center mb-3">
                            <button className="btn btn-warning px-4 mx-5 btn-prev" onClick={() => displayAdditionalIngredientsOptions('minus')}>
                                Prev
                            </button>
                            <button className="btn btn-warning px-4 mx-5 btn-next" onClick={() => displayAdditionalIngredientsOptions('plus')}>
                                Next
                            </button>
                        </div>
                    )}

                    {/* available options */}
                    <form className="btn-group d-flex flex-column align-items-center mb-4" onSubmit={handleSubmitFilterOption}>

                        <div className="row mb-4 gap-1 align-items-center justify-content-center">
                            {selectedFilterOption.displayedOptionsList.map((option, idx) => {
                                // console.log(option);
                                const name = option.strArea || option.strCategory || option.strIngredient

                                return (
                                    <div key={idx} className="option col-5 col-md-3 col-lg-2 p-1">
                                        <input type="radio" className="btn-check" name="options-base" id={name} value={name} autoComplete="off" />
                                        <label className="btn btn-outline-success w-100" htmlFor={name}>
                                            {name}
                                        </label>
                                    </div>
                                )
                            })}
                        </div >
                        <div>
                            <button type="submit" className="btn w-100 text-white bg-success rounded fw-bold text-uppercase px-5">
                                Select
                            </button>
                        </div>
                    </form>
                </section>
            )}
        </>
    )
}

export default AvailableOptions