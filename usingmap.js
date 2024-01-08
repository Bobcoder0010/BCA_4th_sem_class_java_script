const stringsArray = ['Mango', 'Papaya', 'Kiwi', 'pineapple','watermelon'];

const capitalizedArray = stringsArray.map(function(string) {
  return string.toUpperCase();
});

console.log("Array with capitalized strings:");
console.log(capitalizedArray);
