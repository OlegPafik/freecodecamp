/**
 * Checks if str is a palindrome (case sensitive), when str has no special symbols.
 * @param {string} str - The word to check.
 * @returns {boolean} True or False.
 */
function palindrome(str) {  

  function reverse(str) {
    return str.split("").reverse().join("")
  }
  function removeNonAlphanumerics(str){
    return str.replace(/[^a-z0-9]/gi,"")
  }
  
  str = str.toLowerCase()  
  str = removeNonAlphanumerics(str)
  return str == reverse(str)
}

module.exports = palindrome