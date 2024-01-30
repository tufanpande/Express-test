
//Write a JavaScript function to get the number of occurrences 
//22of each letter in a specified string.
const CLetters = (inputString) =>
  inputString
    .replace(/[^a-zA-Z]/g, '')
    .toUpperCase()
    .split('')
    .reduce((letterCount, char) => {
      letterCount[char] = (letterCount[char] || 0) + 1;
      return letterCount;
    }, {});

const inputString = "Hello, World!";
const result = CLetters(inputString);
console.log(result);