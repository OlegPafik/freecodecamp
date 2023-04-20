/**
 * Checks if str is a palindrome (case sensitive), when str has no special symbols.
 * @param {string} str - The word to check.
 * @returns {boolean} True or False.
 */
function palindrome(str) {    
  const forwardStr = str
  const forwardLetters = str.split("");
  const reversedStr = forwardLetters.reverse().join("")
  const isPalindrome = forwardStr == reversedStr
  return isPalindrome
}
  
console.log(palindrome("eye"));