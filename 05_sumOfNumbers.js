// Solved 2022-06-27

// Sum of Numbers

// Given two integers a and b, which can be positive or negative,
// find the sum of all the integers between and including them and return it.
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// Solution
// 1. return either of the numbers if they're equal
// 2. determine wich of the numbers is min and max
// 3. set an accumulator to 0
// 3. add all the numbers between min and max into the accumulator
// 4. return the accumulator

function getSum(a, b) {

    let min = undefined;
    let max = undefined;

    if (a === b) {
        return a;
    } else {
        if (a < b) {
            min = a;
            max = b;
        } else {
            min = b;
            max = a;
        }
    }
    
    let sum = 0;

    for (let i=min; i<=max; i++) {
        sum += i;
    }

    return sum;

}

console.log(getSum(-5, 0)); // should return -15

// Samples
// console.log(getSum(0, 4)); // should return 10
// console.log(getSum(4, 4)); // should return 4
// console.log(getSum(-5, 0)); // should return -15