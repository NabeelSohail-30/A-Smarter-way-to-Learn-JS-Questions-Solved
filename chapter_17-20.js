for (var i = 0; i < 10; i++) {
  // Loop body goes here
}

for (var i = 0; i <= 12; i++) {
  // Loop body goes here
}

for (var i = 0; i <= 4; i++) {
  // Loop body goes here
}

for (var j = 0; j < 100; j++) {
  // Loop body goes here
}

for (var k = 3; k > 0; k--) {
  // Loop body goes here
}

var arrayLength = myArray.length;

var flag = true; // or false, depending on your choice

for (var i = 0; i < pets.length; i++) {
  // Loop body goes here
}

for (var i = 0; i < 10; i++) {
  if (i === 1) {
    alert(i);
    break;
  }
}

var userNames = ["user1", "user2", "user3"]; // Replace with actual user names
var userName = prompt("Enter first name");
var found = false;

for (var i = 0; i < userNames.length; i++) {
  if (userName === userNames[i]) {
    alert("Enter");
    found = true;
    break;
  }
}

if (!found) {
  alert("Please write the correct user name");
}

var matchFound = false;
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}

if (!matchFound) {
  alert("Match not found");
}

var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
  for (var j = 0; j < secondArr.length; j++) {
    console.log(firstArr[i] + secondArr[j]);
  }
}
