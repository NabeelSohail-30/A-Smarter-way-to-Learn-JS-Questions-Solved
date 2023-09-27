const dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("It's the start of the workweek.");
    break;
  case "Tuesday":
    console.log("It's another workday.");
    break;
  case "Wednesday":
    console.log("It's the middle of the week.");
    break;
  case "Thursday":
    console.log("It's almost the weekend.");
    break;
  case "Friday":
    console.log("It's the last workday of the week.");
    break;
  default:
    console.log("It's the weekend!");
}

const cityName = prompt("Enter a city name:");

switch (cityName) {
  case "New York":
    alert("You entered New York!");
    break;
  case "Los Angeles":
    alert("You entered Los Angeles!");
    break;
  case "Chicago":
    alert("You entered Chicago!");
    break;
  default:
    alert("City not recognized.");
}
