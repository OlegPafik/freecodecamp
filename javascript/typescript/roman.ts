/**
 * Convert the given number into a roman numeral.
 * @param {number} number - The arabic number to convert.
 * @returns {string} - The resulting roman numeral.
 */
const roman = (number: number): string => {
  let dict: { [arabic: number]: string } = {
    1: "I",
    5: "V"
  }

  let roman: string = ""

  const remainderI = number % 5
  
  if (remainderI == 0) {
    roman = dict[5]
  } else if (remainderI == 4) {
    roman = dict[1] + dict[5]
  } else {
    for (let i = 0; i < remainderI; i++) {
      roman = roman + dict[1]
    }
  }

  return roman
}

module.exports = roman
// To test: npx jest roman.test.js