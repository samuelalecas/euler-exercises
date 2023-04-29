// Problem 5: Smallest multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

function smallestMult(n) {

    // Tomo un número
    // ¿Es divisible entre 2 ?
    // ¿Es divisible entre 3 ?
    // ...
    // Si es divisible entre todos esos números -> Devuélvelo
    // ¿No lo es? --> Pasa al siguiente número

    let number = n;
    for (let i = 2; i <= n; i++) {
        if (n % i === 1){
            console.log("Se divide entre " + i);
        }
    }
    return console.log("Finished!");
}

function factorial(number) {
    if (number < 1) {
        return 1;
    }
    return number * factorial(number - 1);
}

console.log(smallestMult(10));
// smallestMult(20);
