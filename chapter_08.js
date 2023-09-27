var num = "2" + "2";
// The value of num is "22" (including the quotation marks), as it concatenates the two strings.

var message = ("Hello," + "Dolly");
// The value of message is "Hello,Dolly" (including the quotation marks). To alert the statement, you can use:
alert(message);

alert("33" + 3);
// The message that displays in the alert box is "333". JavaScript performs string concatenation when one of the operands is a string, so it combines the two values into a single string.

// To display the concatenation of the two parts of "Pakistan Zindabad" in an alert:
var part1 = "Pakistan";
var part2 = "Zindabad";
alert(part1 + " " + part2);

// To assign to a variable the concatenation of a string with a number:
var combined = "This is a number: " + 42;

// Assign strings to two variables, then concatenate them and assign the result to a third variable:
var string1 = "Hello, ";
var string2 = "world!";
var combinedString = string1 + string2;