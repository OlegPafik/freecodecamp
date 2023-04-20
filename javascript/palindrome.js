function palindrome(str) {
    const forwardStr = str
    const forwardLetters = str.split("");
    const reversedStr = forwardLetters.reverse().join("")
    if (forwardStr == reversedStr) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(palindrome("eye"));