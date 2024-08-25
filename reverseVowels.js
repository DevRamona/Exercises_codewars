const reverseVowels =(string) => {
    const allVowels = string.match(/[aeiou]/gi)
    return (allVowels === null) ? string : string.replace(/[aeiou]/gi, element => allVowels.pop())
}
