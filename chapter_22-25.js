var sameWords = "captain";
var slicedPart = sameWords.slice(1, 3); // This will give you "ap"

var myString = "example";
var characterCount = myString.length; // This will be 7 in this case

var animal = "elephant";
var seg = animal.slice(1, 5); // This will give you "leph"

var myString = "example";
var characterCount = myString.length; // This will be 7 in this case

var myString = "example";
var characterCount = myString.length; // This will be 7 in this case
var slicedString = myString.slice(1, -3); // This will give you "xam"

// The value of indx will be 3 because "be" is found starting at index 3 in the string.

// The value of indx will be 16 because the last occurrence of "be" is found starting at index 16 in the string.

var text = "To go or not to go.";
var indx = text.lastIndexOf("go"); // This will be 14 in this case

if (str[indexNum] !== undefined) {
  // Segment at indexNum exists in the string
}

// The character at index 2 in the string "abcde" is "c".

var text = "0123456789abcdefghij";
var cha = text.charAt(9); // This will be "9"

var str = "example";
var x = str.charAt(str.length - 1); // This will be "e"

var input = "example";
var cha = input.charAt(4); // This will be "p"

if (myString.charAt(2) === "A") {
  // 3rd character is 'A'
}

var myString = "example";
var charArray = [];
for (var i = 0; i < myString.length; i++) {
  charArray.push(myString.charAt(i));
}

var str = "1, 2, 3, 4, 5, 1";
var newStr = str.replace("1", "one"); // This will replace the first "1" with "one"

var y = x.replace(/a/g, "z");
