// Problem 5: Smallest multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

// UPDATE: Refactor is needed to pass FreeCodeCamp's tests...

function smallestMult(n) {

    let number = n - 1;
    let divisible;

    do {
        divisible = true;
        // Check all numbers (from 2 to n)
        for (let i = 2; i <= n; i++) {
            // If one of them has remainder...
            if (number % i !== 0) {
                divisible = false;
                // Stop it and check next number
                number++;
                break;
            };
        }
    } while (!divisible && factorial(n))

    return number;
}

function factorial(number) {
    if (number < 1) {
        return 1;
    }
    return number * factorial(number - 1);
}

// console.log(smallestMult(20));
smallestMult(20);
