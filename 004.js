// Problem 4: Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(n) {
  let maxDigits = 10 ** n;
  let number = 0;
  let largestPalindrome = 0;

  for (let num1 = maxDigits - 1; num1 > 0; num1--) {
    for (let num2 = maxDigits - 1; num2 > 0; num2--) {
      number = num1 * num2;
      if (isPalindrome(number)) {
        if (number > largestPalindrome) {
          largestPalindrome = number;
        }
      }
    }
  }

  return largestPalindrome;
}

function isPalindrome(number) {
  let currentNumber = number.toString();
  let numberReversed = currentNumber.split('').reverse().join('');
  return currentNumber === numberReversed;
}


// console.log(largestPalindromeProduct(3));

largestPalindromeProduct(3);

