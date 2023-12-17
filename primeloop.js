function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function findPrimes() {
    const primes = [];
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }
  
  const primeNumbers = findPrimes();
  console.log("Prime numbers between 1 and 100 are:", primeNumbers);
  