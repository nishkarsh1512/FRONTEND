const isValidNum = (str: string) => {
    return /^\d*\.?\d*$/.test(str)
}

export default isValidNum
