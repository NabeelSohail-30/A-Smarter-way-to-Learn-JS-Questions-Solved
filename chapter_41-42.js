// Using while loop
let i = 0;
while (i < 2) {
  // Code that does nothing
  i++;
}

// Using do...while loop
let j = 0;
do {
  // Code that does nothing
  j++;
} while (j < 2);

const animals = ["horse", "ox", "cow", "pig", "duck"];
let index = 0;

// Using while loop
while (index < animals.length) {
  if (animals[index] === "pig") {
    alert("Found it!");
    break;
  }
  index++;
}

// Using do...while loop
index = 0;
do {
  if (animals[index] === "pig") {
    alert("Found it!");
    break;
  }
  index++;
} while (index < animals.length);

let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}

let userInput;
while (true) {
  userInput = prompt("Enter a number:");
  if (userInput === null) {
    break;
  }
  console.log("You entered: " + userInput);
}

let numToCheck = 1;
while (numToCheck <= 10) {
  if (numToCheck % 2 === 0) {
    console.log(numToCheck + " is even");
  } else {
    console.log(numToCheck + " is odd");
  }
  numToCheck++;
}

const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guess;

while (guess !== targetNumber) {
  guess = parseInt(prompt("Guess a number between 1 and 100:"));

  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else {
    attempts++;
    if (guess < targetNumber) {
      alert("Too low! Try again.");
    } else if (guess > targetNumber) {
      alert("Too high! Try again.");
    }
  }
}

alert(
  `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`
);

let countdown = 10;
while (countdown >= 0) {
  console.log(countdown);
  countdown--;
}

let countdown = 10;
do {
  console.log(countdown);
  countdown--;
} while (countdown >= 0);
