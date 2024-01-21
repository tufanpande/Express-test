const getRandomNumber = (callback) => {
  const randomNumber = Math.floor(Math.random() * 17) + 1;
  // Invoke the callback function with the random number as an argument
  callback(randomNumber);
};
// Define a callback arrow function to handle the random number
const handleRandomNumber = (number) => {
  console.log("Random Number:", number);
};
getRandomNumber(handleRandomNumber);

  