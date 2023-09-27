const num = 3.14159265;
const newNum = num.toFixed(4).toString();
console.log(newNum); // Output: "3.1416"

let num = 3.14159265;
num = parseFloat(num.toFixed(2));
console.log(num); // Output: 3.14

const num = 123.45;
if (num.toFixed(2).toString().length > 4) {
  // Your code here
  console.log("Number has more than 4 characters.");
} else {
  console.log("Number has 4 or fewer characters.");
}

const originalNumber = 123.456789;
const roundedNumber = originalNumber.toFixed(2).toString();

alert(roundedNumber); // This will display an alert with "123.46"
