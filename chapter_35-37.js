function displayAlert() {
  // First line goes here
}

function askName() {
  const userName = prompt("Enter name");
}

function callTwoFunctions() {
  function1(); // Call the first function
  function2(); // Call the second function
}

function displayName() {
  const name = prompt("Enter name");
  alert(`Hello, ${name}!`);
}

// Call the function
displayName();

function concat(param1, param2, param3) {
  // First line goes here
}

function concatenateStrings(str1, str2) {
  const result = str1 + str2;
  return result;
}

function multiplyNumbers(num1, num2, num3) {
  const result = num1 * num2 * num3;
  return result;
}

function calculateAverage(numbers) {
  const sum = numbers.reduce((total, num) => total + num, 0);
  const average = sum / numbers.length;
  return average;
}

function addNumbers(num1, num2) {
  return num1 + num2;
}

function calculateAverage(numbers) {
  const sum = numbers.reduce((total, num) => total + num, 0);
  const average = sum / numbers.length;
  return average;
}

const result = someFunction(); // Replace someFunction with the actual function you want to call

function countLetters(word) {
  const letterCounts = {};
  for (const letter of word) {
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  }
  return letterCounts;
}

function setYearInDate(date, year) {
  date.setFullYear(year);
}

function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  const ageInMilliseconds = today - birthDate;
  const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
  return Math.floor(ageInYears);
}

function checkWordPresence(word, array) {
  return array.includes(word);
}

function repeatLetter(letter) {
  return letter.repeat(10);
}

function reverseArray(arr) {
  return arr.reverse();
}
