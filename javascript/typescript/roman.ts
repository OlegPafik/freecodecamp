/**
 * Convert the given number into a roman numeral.
 * @param {number} arabic - The arabic number to convert.
 * @returns {string} - The resulting roman numeral.
 */
const roman = (arabic: number): string => {

  let dict: { [arabic: number]: string } = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  }

  /**
   * Extract thousands from the number and print them as M in roman.
   */
  const convertThousands = (input: number): number => {
    const thousands = Math.floor(input / 1000)
    const extract = thousands * 1000
    const remaining = input - extract

    // Print M
    for (let i = 0; i < thousands; i++) {
      romansAdded = romansAdded + dict[1000]
    }

    return remaining
  }

  /**
   * Extract hundreds from the number and print them as 
   * CM, D, CD and C in roman.
   */
  const convertHundreds = (input: number): number => {
    const hundreds = Math.floor(input / 100)
    const extract = hundreds * 100
    const remaining = input - extract
    if (extract == 900) {
      romansAdded = romansAdded.substring(0, romansAdded.length - 1)
      romansAdded = romansAdded + "CM"
    } else if (extract >= 500) {
      romansAdded = romansAdded + "D"
      for (let i = 0; i < extract - 500; i = i + 100) {
        romansAdded = romansAdded + "C"
      }
    } else if (extract == 400) {
      romansAdded = romansAdded + "CD"
    } else {
      for (let i = 0; i < extract; i = i + 100) {
        romansAdded = romansAdded + "C"
      }
    }
    return remaining
  }

  /**
   * Extract tens from the number and print them as 
   * XC, L, XL and X in roman.
   */
  const convertTens = (input: number): number => {
    const tens = Math.floor(input / 10)
    const extract = tens * 10
    const remaining = input - extract
    if (extract == 90) {
      romansAdded = romansAdded.substring(0, romansAdded.length - 1)
      romansAdded = romansAdded + "XC"
    } else if (extract >= 50) {
      romansAdded = romansAdded + "L"
      for (let i = 0; i < extract - 50; i = i + 10) {
        romansAdded = romansAdded + "X"
      }
    } else if (extract == 40) {
      romansAdded = romansAdded + "XL"
    } else {
      for (let i = 0; i < extract; i = i + 10) {
        romansAdded = romansAdded + "X"
      }
    }
    return remaining
  }

  /**
   * Extract units from the number and print them as 
   * IX, V, IV and I in roman.
   */
  const convertUnits = (input: number): number => {
    const units = input
    const extract = units
    const remaining = input - extract
    if (extract == 9) {
      romansAdded = romansAdded.substring(0, romansAdded.length - 1)
      romansAdded = romansAdded + "IX"
    } else if (extract >= 5) {
      romansAdded = romansAdded + "V"
      for (let i = 0; i < extract - 5; i = i + 1) {
        romansAdded = romansAdded + "I"
      }
    } else if (extract == 4) {
      romansAdded = romansAdded + "IV"
    } else {
      for (let i = 0; i < extract; i = i + 1) {
        romansAdded = romansAdded + "I"
      }
    }
    return remaining
  }


  let romansAdded: string = ""
  let notConvertedYet: number
  notConvertedYet = convertThousands(arabic)
  notConvertedYet = convertHundreds(notConvertedYet)
  notConvertedYet = convertTens(notConvertedYet)
  notConvertedYet = convertUnits(notConvertedYet)

  return romansAdded
}

module.exports = roman
// To test: npx jest roman.test.js