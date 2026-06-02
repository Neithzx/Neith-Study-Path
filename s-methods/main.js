
// Exs 1 Strings Length


function isValidPassword(password) {
    return password.length >= 8;
}

console.log(isValidPassword("Hi!"));
console.log(isValidPassword("Yabougua39"));
console.log(isValidPassword("14785239"));
console.log(isValidPassword("Calle12-123"));


// Exs 2 Strings Length


function findLongestWord(wordsArray) {
  // Step 1: Start with an empty string as our initial "longest"
  let longestWord = ""; 

  // Step 2: Loop through each word in the array
  for (let word of wordsArray) {
    
    // Step 3 & 4: Compare the current word's length to our champion's length
    if (word.length > longestWord.length) {
      longestWord = word; // Update the champion!
    }
  }

  // Step 5: Return the final winner after the loop is done
  return longestWord; 
}

// Let's test it!
const fruits = ["apple", "banana", "strawberry", "kiwi"];
console.log(findLongestWord(fruits)); // Expected: "strawberry"

const shortWords = ["cat", "dog", "rat"];
console.log(findLongestWord(shortWords)); // Expected: "cat" (It keeps the first one it finds if there's a tie!)