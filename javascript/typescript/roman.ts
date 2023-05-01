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
  const convertThousands = (digit: number): string => {
    let romans: string = ""
    // Print M
    for (let i = 0; i < digit; i++) {
      romans = dict[1000] + romans
    }
    return romans
  }

  /**
   * Extract hundreds from the number and print them as 
   * CM, D, CD and C in roman.
   */
  const convertHundreds = (digit: number): string => {
    let romans: string = ""
    if (digit == 9) {
      romans = romans + "CM"
    } else if (digit >= 5) {
      romans = romans + "D"
      for (let i = 0; i < digit - 5; i++) {
        romans = romans + "C"
      }
    } else if (digit == 4) {
      romans = romans + "CD"
    } else {
      for (let i = 0; i < digit; i++) {
        romans = romans + "C"
      }
    }
    return romans
  }

  /**
   * Extract tens from the number and print them as 
   * XC, L, XL and X in roman.
   */
  const convertTens = (digit: number): string => {
    let romans: string = ""
    if (digit == 9) {
      romans = romans + "XC"
    } else if (digit >= 5) {
      romans = romans + "L"
      for (let i = 0; i < digit - 5; i++) {
        romans = romans + "X"
      }
    } else if (digit == 4) {
      romans = romans + "XL"
    } else {
      for (let i = 0; i < digit; i++) {
        romans = romans + "X"
      }
    }
    return romans
  }

  /**
   * Extract units from the number and print them as 
   * IX, V, IV and I in roman.
   */
  const convertUnits = (digit: number): string => {
    let romans: string = ""
    if (digit == 9) {
      romans = romans + "IX"
    } else if (digit >= 5) {
      romans = romans + "V"
      for (let i = 0; i < digit - 5; i++) {
        romans = romans + "I"
      }
    } else if (digit == 4) {
      romans = romans + "IV"
    } else {
      for (let i = 0; i < digit; i++) {
        romans = romans + "I"
      }
    }
    return romans
  }

  /**
   * Extract digits from number
   */
  const getDigits = (input: number): Array<number> => {
    let remainder: number
    let digit: Array<number> = [0, 0, 0, 0]
    digit[3] = Math.floor(input / 1000)
    remainder = input % 1000
    digit[2] = Math.floor(remainder / 100)
    remainder = input % 100
    digit[1] = Math.floor(remainder / 10)
    digit[0] = input % 10
    return digit
  }

  let romanNumber: string = ""
  
  const digits = getDigits(arabic)

  romanNumber = convertThousands(digits[3]) + convertHundreds(digits[2]) + convertTens(digits[1]) + convertUnits(digits[0])

  return romanNumber
}

module.exports = roman
// To test: npx jest roman.test.js