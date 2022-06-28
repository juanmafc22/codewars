// Solved 2022-06-28

// A Narcissistic Number is a positive number which is the sum of its own digits,
// each raised to the power of the number of digits in a given base.
// In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// and 1652 (4 digits), which isn't:

// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

// The Challenge:

// Your code must return true or false (not 'true' and 'false')
// depending upon whether the given number is a Narcissistic number in base 10.

// Error checking for text strings or other invalid inputs is not required,
// only valid positive non-zero integers will be passed into the function.

// Solution
// 1. create an array of numbers using ES6 features, applying the Number constructor
// to each element of the array
// 2. cycle through every element of the created array with the foreach method,
// raising every element to the power of array length and adding the sum into an
// accumulator 
// 3. verify if the accumulator is equal to the original value given

function narcissistic(value) {

    const numArray = Array.from(value.toString()).map(Number);

    const narcissismPower = numArray.length;

    let checkNarcissism = 0;

    numArray.forEach (digit => {
        checkNarcissism  += digit ** narcissismPower; 
    })

    return (checkNarcissism === value);
        
}

console.log(narcissistic(153));

// Examples of Narcissistic numbers: 153, 370, 371, 470
