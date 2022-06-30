// Solved 2022-06-30

// You are given an array (which will have a length of at least 3,
// but could be very large) containing integers. The array is either
// entirely comprised of odd integers or entirely comprised of even integers except
// for a single integer N. Write a method that takes the array as an argument and
// returns this "outlier" N.

// Solution - LONG VERBOSE SOLUTION
// 1. Check the first three elements of integers array to see which are majority: odd or even
// 2. Set the checkfor variable to test for that type of number: odd or even
// 3. Iterate through the integers array
// If checking for the odd num, find the element of the array that %2 is not equal to zero and return it
// if checking for the even num, find the element of the array that %2 IS equal to zero and return it

function findOutlier (integers) {

    let countOdd = 0;
    let countEven = 0;

    let checkFor = "";

    for (let i=0; i<3; i++) {
        if (integers[i]%2 == 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }

    if (countEven > countOdd) {
        checkFor = "odd";
    } else {
        checkFor = "even";
    }

    let result = null;
    
    for(let i=0; i<integers.length; i++) {

        if (checkFor == "odd") {
            if(integers[i]%2 != 0) {
                return integers[i];
            }
        } else {
            if(integers[i]%2 == 0) {
                return integers[i];
            }
        }

    }

}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))

// Samples

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

