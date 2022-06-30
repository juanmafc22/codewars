// Solved 2022-06-30

// You are given an array (which will have a length of at least 3,
// but could be very large) containing integers. The array is either
// entirely comprised of odd integers or entirely comprised of even integers except
// for a single integer N. Write a method that takes the array as an argument and
// returns this "outlier" N.

// Solution - SHORT CONCISE SOLUTION
// 1. Use the filter method to create a new aray "even" based on
// finding (filtering in this case) an element of the integers array that %2 is equal to zero.
// If the filter condition is met the new array will have one element, the even outlier element
// 2. Do the same thing but for the odd numbers.
// 3. This will make both arrays either: to have a length of 1 and the other one empty
// 4. Use a ternary operator to test which of the newly formed arrays has a length of 1,
// returning the index 0 (it's only element)

function findOutlier (integers) {

    const even = integers.filter ( number => {
        return number % 2 === 0;
    });

    const odd = integers.filter ( number => {
        return number % 2 !== 0;
    });

    return even.length === 1 ? even[0] : odd[0];
    

}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))

// Samples

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

