/**
 * Convert the given number into a roman numeral.
 * @param {number} number - The arabic number to convert.
 * @returns {string} - The resulting roman numeral.
 */
function roman(number: number): string {
  let roman: string = String(number)
  return roman
}

module.exports = roman
// To test: npx jest roman.test.js