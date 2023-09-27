// To convert a string to an integer in JavaScript, you can use the parseInt() function

const str = "123";
const integer = parseInt(str);
console.log(integer); // Output: 123

const str_2 = "3.14";
const floatingPoint = parseFloat(str_2);
console.log(floatingPoint); // Output: 3.14

const str_3 = "123";
const canBeConvertedToInt = !isNaN(parseInt(str_3));
const canBeConvertedToFloat = !isNaN(parseFloat(str_3));

console.log(canBeConvertedToInt); // Output: true
console.log(canBeConvertedToFloat); // Output: true

const num = 42;
const str1 = num.toString();
const str2 = num + "";

console.log(str1); // Output: "42"
console.log(str2); // Output: "42"

function numberToString(num) {
  return num.toString();
}

const result = numberToString(42);
console.log(result); // Output: "42"

const decimalStr = "3.14";
const floatNum = parseFloat(decimalStr);
const integerNum = Math.floor(floatNum); // or Math.ceil(floatNum) for rounding up

console.log(integerNum); // Output: 3 (if using Math.floor)
