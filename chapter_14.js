var password = prompt("Enter a password:");

if (password !== "") {
  if (password.length <= 5) {
    alert("Password must be greater than 5");
  } else {
    alert("OK");
  }
}

// The provided statement checks if a is equal to 1, and if c is equal to "Max," it displays an alert. This statement is already correctly structured.

if (a === 1 && c === "Max") {
  alert("OK");
}

var num1 = 10;
var num2 = 10;

if (num1 === num2) {
  if (num1 <= num2) {
    alert("The conditions are true.");
  }
}
