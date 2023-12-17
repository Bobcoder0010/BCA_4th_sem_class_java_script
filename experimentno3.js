let originalString = "Hello, World!";
let reversedString = "";
let i = originalString.length - 1;

do {
  reversedString += originalString[i];
  i--;
} while (i >= 0);

console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);
