function isPalindrome(word) {
  // Convert the word to lowercase
  word = word.toLowerCase();
  // Splits all the letters and reverses the word
  const reversedWord = word.split('').reverse().join('');
  // Test if the word is equal to the reversed word
  if (word === reversedWord) {
  return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here

  1. Function isPalindrome receives one argument
  2. Function deals only with lowercase strings
  3. Create a variable for reversed word
  3. It returns true if the word is equal to the reversed word
  4. It returns false if the word is not equal to the reversed word

*/

/*
  Add written explanation of your solution here

  1. Made the word ro lowercase so that it can be compared case-insensitive.
  2. Split all the letters of the word so that it can be reversed and joined back together.
  3. Checks if the word is equal to the reversed word and returned true if so and flase if not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("call"));
}

module.exports = isPalindrome;
