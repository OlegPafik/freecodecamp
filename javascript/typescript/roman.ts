/**
 * Convert the given number into a roman numeral.
 * @param {number} number - The arabic number to convert.
 * @returns {string} - The resulting roman numeral.
 */
function roman(number: number): string {
  let dict: { [arabic: number]: string } = {
    1: "I"
  }

  let roman: string = ""
  
  for (let i = 0; i < number; i++) {
    roman = roman + dict[1]
  }

  return roman
}

module.exports = roman
// To test: npx jest roman.test.js