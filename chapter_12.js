var variable1 = 5;
var variable2 = 3;

if (variable1 >= variable2) {
  alert("Variable1 is greater than or equal to Variable2");
} else {
  alert("Variable1 is less than Variable2");
}

var marks = parseFloat(prompt("Enter your marks:"));
var percentage = (marks / 100) * 100; // Assuming maximum marks are 100

if (percentage >= 90) {
  alert("Your grade is A");
} else if (percentage >= 70) {
  alert("Your grade is B");
} else if (percentage >= 50) {
  alert("Your grade is C");
} else {
  alert("You didn't pass the exam.");
}

if (a === 10) {
  alert("a is 10");
} else {
  alert("The correct value of a is " + a);
}

var city = prompt("Enter a city:");

if (city === "Karachi") {
  alert("Acknowledging it is Karachi.");
} else if (city === "Lahore") {
  alert("Acknowledging it's Lahore.");
} else {
  alert("This city is not recognized.");
}
