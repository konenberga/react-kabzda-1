export const requiredFields = value => {
    if (value) {
        return undefined
    } else {
        return 'required'
    }

}

export const maxLength = (length) => {
    return value => {
        if (value && value.length > length) {
            return `Max length is ${length}`
        } else {
            return undefined
        }

    }
}
