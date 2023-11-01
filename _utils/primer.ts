function primeNumbers(n: number) {
  if (!globalThis.primes) {
    globalThis.primes = [];
  }

  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 0; i < globalThis.primes.length; i++) {
      if (num % globalThis.primes[i] === 0) {
        return false;
      }
    }
    return true;
  }

  return new Promise((resolve, reject) => {
    let primeCount = 0;
    let currentNumber = 2;
    let currentPrime = 0;
    let beforePrime = 0;
    let afterPrime = 0;

    function checkPrime() {
      if (primeCount >= n) {
        resolve({
          current: currentPrime,
          before: beforePrime,
          after: afterPrime
        });
        return;
      }

      if (isPrime(currentNumber)) {
        globalThis.primes.push(currentNumber);
        primeCount++;
        beforePrime = currentPrime;
        currentPrime = currentNumber;
      }

      currentNumber++;

      setTimeout(checkPrime, 0);
    }

    checkPrime();
  });
}

// primeNumbers(5)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.error(error);
//   });
