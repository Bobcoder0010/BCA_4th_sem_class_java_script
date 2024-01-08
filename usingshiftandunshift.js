let stringsArray = ['Mango', 'Papaya', 'Kiwi', 'pineapple','watermelon'];

console.log("Initial array of strings:");
console.log(stringsArray);

const removedElement = stringsArray.shift();

console.log("\nArray after removing the first element:");
console.log(stringsArray);

const newString = 'raddish';
stringsArray.unshift(newString);

console.log("\nArray after adding a new string to the beginning:");
console.log(stringsArray);

console.log("\nRemoved element:");
console.log(removedElement);
