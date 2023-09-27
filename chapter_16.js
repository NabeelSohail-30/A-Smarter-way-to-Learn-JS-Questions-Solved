var myArray = ["First Element"];
myArray.push("Second Element"); // Add a new element to the end of the array
var lastElement = myArray[myArray.length - 1]; // Get the last element
alert(lastElement); // This will display an alert with the message "Second Element"

var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop(); // Remove the last element
console.log(Alphabet); // This will print the modified array without the last element

var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(42); // Add a number to the end of the array
console.log(Alphabet); // This will print the modified array with the new element

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift(); // Remove the first element
console.log(sizes); // This will print the modified array without the first element

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3); // Add three numbers to the beginning of the array
console.log(sizes); // This will print the modified array with the new elements

var myArray = ["First Element"];
myArray.unshift("Second Element"); // Add a new element to the beginning
alert(myArray[0]); // This will display an alert with the message "Second Element"

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L"); // Insert "L" between "M" and "XL"
console.log(sizes); // This will print the modified array with "L" inserted

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3); // Copy the first 3 sizes
console.log(regSizes); // This will print the new array with the copied sizes

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "elephant", "giraffe"); // Add 2 elements after "dog" and remove "cat," "ox," and "duck"
console.log(pets); // This will print the modified array

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2); // Remove "cat" and "ox"
console.log(pets); // This will print the modified array

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5); // Get "duck" and "frog"
console.log(reducedPets); // This will print the reduced array
