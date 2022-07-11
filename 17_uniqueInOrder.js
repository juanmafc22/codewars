// Solved 2022-07-11

// Implement the function unique_in_order which takes as
// argument a sequence and returns a list of items without
// any elements with the same value next to each other
// and preserving the original order of elements.
// NOTE: iterable can be either a string or an array

// For example:
// ('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// ('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// ([1,2,2,3,3])       == [1,2,3]

// Solution
// 1. iterate through the iterable string or array, and check if the next elemnent in
// the iteration is NOT the same as the current element of the iteration. If not so, add
// (push) the value to resultArray

function uniqueInOrder (iterable) {
    
    let resultArray = [];

    for (let i=0; i<iterable.length; i++) {
        
        if (iterable[i+1] != iterable[i]) {
            resultArray.push(iterable[i]);
        }
    }

    return resultArray;

}

console.log(uniqueInOrder([1,2,2,3,3]));

// Samples
// ('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
