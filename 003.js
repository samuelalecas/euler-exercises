// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

function largestPrimeFactor(n) {
    let primes = getArrays(n);
    let primeFactors = [];

    let number = n;
    while (number > 1) {
        for (let i = 1; i < primes.length; i++) {
            if (number % primes[i] === 0) {
                number /= primes[i];
                primeFactors.push(primes[i]);
                break;
            }
        }
    }

    return primeFactors[primeFactors.length - 1];
}

function getArrays(n) {
    let primes = [];
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}


console.log(largestPrimeFactor(13195));

largestPrimeFactor(13195);