export const selectFilterOption = (availableOptions) => {
    const selectedAvailableOption = availableOptions
      .filter(options => options.checked)
      .map(options => options.id)

    return selectedAvailableOption[0]
}