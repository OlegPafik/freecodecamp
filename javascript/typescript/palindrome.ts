/**
 * Checks if str is a palindrome, case and special symbols insensitive.
 * @param {string} str - The word to check.
 * @returns {boolean} True or False.
 */
function palindrome(str: string): boolean {
  
  function reverse(str: string): string {
    return str.split("").reverse().join("")
  }
  function removeNonAlphanumerics(str) {
    return str.replace(/[^a-z0-9]/gi,"")
  }

  str = str.toLowerCase()
  str = removeNonAlphanumerics(str)
  return str == reverse(str)
}

console.log(palindrome("eye"))
console.log(palindrome("eyd"))
console.log(palindrome("$%&ey e"))
console.log(palindrome("$%&eyyY e"))