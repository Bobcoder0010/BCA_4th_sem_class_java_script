function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  let userInput = window.prompt("Enter a number to calculate its factorial:");
  
  if (userInput === null || userInput.trim() === "") {
    console.log("No input provided.");
  } else {
    let parsedInput = parseInt(userInput);
  
    if (!isNaN(parsedInput) && parsedInput >= 0) {
      let result = factorial(parsedInput);
      console.log(`The factorial of ${parsedInput} is: ${result}`);
    } else {
      console.log("Please enter a valid non-negative number.");
    }
  }
  