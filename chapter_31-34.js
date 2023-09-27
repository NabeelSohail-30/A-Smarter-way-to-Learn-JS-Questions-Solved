const dObj = new Date();

const d = new Date();
const dStr = d.toString();

const d = new Date();
const day = d.getDay();

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = new Date();
const day = d.getDay();
alert(dayNames[day]);

const d = new Date();
const year = d.getFullYear();
const month = d.getMonth() + 1; // Months are 0-based, so add 1
const day = d.getDate();
const hours = d.getHours();
const minutes = d.getMinutes();
const seconds = d.getSeconds();
const milliseconds = d.getMilliseconds();

const later = new Date(2020, 11, 31);

const date = new Date(1992, 1, 2);

const referenceDate = new Date();
const beginningOf1980 = new Date(1980, 0, 1); // January is month 0
const millisecondsElapsed = referenceDate - beginningOf1980;
alert(millisecondsElapsed);

const d = new Date();
d.setFullYear(2022); // Change the year to 2022

function changeToJanuary(date) {
  date.setMonth(0); // January is month 0
}

const d = new Date();
changeToJanuary(d);

// You cannot directly change the day of the week for a specific date in JavaScript. The day of the week is determined by the date itself and cannot be modified directly. You would need to create a new Date object with the desired day.

const d = new Date();
const newMinutes = prompt("Enter new minutes:");
d.setMinutes(newMinutes);

const d = new Date();
const hoursToAdd = 3; // Change this to the desired number of hours
d.setHours(d.getHours() + hoursToAdd);

function calculateAge(birthDate) {
  const today = new Date();
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  let age = currentYear - birthYear;

  // Adjust age if birthday hasn't occurred yet this year
  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }

  return age;
}

// Usage example:
const birthDate = new Date(1990, 4, 15); // May 15, 1990
const age = calculateAge(birthDate);
console.log(`You are ${age} years old.`);
