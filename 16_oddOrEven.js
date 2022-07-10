// Task: // Given a list of integers, determine whether the sum
// of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

// Solution -- using this as a further test
// 1. Use the redude method to add all the elements of array
// 2. Return "odd" or "even" depending if the sume %2 is equal to zero

function oddOrEven(array) {

    let sum = array.reduce ((previous, current) => {
        return previous + current;
    } )
    
    sum %2 == 0 ? console.log("even") : console.log("odd");

}

console.log(oddOrEven([0, 1, 4]))

// Samples

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
