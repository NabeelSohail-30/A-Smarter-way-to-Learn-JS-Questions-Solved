function demonstrateLocalVariable() {
  // This is a local variable
  const localVar = "I am a local variable.";
  console.log(localVar);
}

demonstrateLocalVariable();
// Attempting to access localVar outside the function would result in an error.

// This is a global variable
const globalVar = "I am a global variable.";

function accessGlobalVariable() {
  // Accessing the global variable inside the function
  console.log(globalVar);
}

accessGlobalVariable(); // This will print the value of globalVar
