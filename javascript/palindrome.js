/**
 * Checks if str is a palindrome (case sensitive), when str has no special symbols.
 * @param {string} str - The word to check.
 * @returns {boolean} True or False.
 */
function palindrome(str) {  
  const lowerCaseStr = str.toLowerCase()  
  const alphanumericStr = lowerCaseStr.replace(/[^a-z0-9]/g,"")
  
  const forwardStr = alphanumericStr
  const forwardLetters = forwardStr.split("")
  const reversedLetters = forwardLetters.reverse()
  const reversedStr = reversedLetters.join("")
  const isPalindrome = forwardStr == reversedStr
  return isPalindrome
}
module.exports = palindrome