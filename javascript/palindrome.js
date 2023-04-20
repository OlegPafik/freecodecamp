function palindrome(str) {    
  const forwardStr = str
  const forwardLetters = str.split("");
  const reversedStr = forwardLetters.reverse().join("")
  const isPalindrome = forwardStr == reversedStr
  return isPalindrome
}
  
console.log(palindrome("eye"));