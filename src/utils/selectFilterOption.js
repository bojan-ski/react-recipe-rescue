export const selectFilterOption = (availableOptions) => {
    const selectedAvailableOption = availableOptions
      .filter(options => options.checked)
      .map(options => options.id)

    // console.log(selectedAvailableOption);
    return selectedAvailableOption[0]
}