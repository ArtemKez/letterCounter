const letterCounter = (str) => {
    if (typeof str !== "string") {
        throw new Error('argument type must be a string')
    }
    let regexText = /[aueioy]/i

    return str.split('').reduce((acc, val) => {
        if (regexText.test(val)) {
            return acc + 1
        } else {
            return acc
        }
    }, 0)
}