// Problem 1: Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
    let numberList = [];

    for (let i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            numberList.push(i);
        }
    }

    return numberList.reduce((a, b) => a + b);
}

multiplesOf3and5(1000);
console.log(multiplesOf3and5(1000)); 
