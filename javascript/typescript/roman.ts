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
   * Extract hundreds, tens and units.
   */
  const convert = (digit: number, exponent: number): string => {
    let romans: string = ""
    if (digit == 9) {
      romans = romans + dict[10 ** exponent] + dict[10 ** (exponent + 1)]
    } else if (digit >= 5) {
      romans = romans + dict[5 * (10 ** exponent)]
      for (let i = 0; i < digit - 5; i++) {
        romans = romans + dict[10 ** exponent]
      }
    } else if (digit == 4) {
      romans = romans + dict[4 * (10 ** exponent)]
    } else {
      for (let i = 0; i < digit; i++) {
        romans = romans + dict[10 ** exponent]
      }
    }
    return romans
  }

  /**
   * Extract digits from number.
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

  romanNumber = convertThousands(digits[3]) + convert(digits[2], 2) + convert(digits[1], 1) + convert(digits[0], 0)

  return romanNumber
}

module.exports = roman
// To test: npx jest roman.test.js