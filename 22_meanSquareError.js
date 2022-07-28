// Solved 2202-07-28

// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.

// Examples

// [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
// [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
// [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

// var solution = function(firstArray, secondArray) {

function meanSquareError(firstArray, secondArray) {

    let finalArray = [];

    for (let i=0; i<firstArray.length; i++) {

        if (firstArray[i]>secondArray[i]) {

            let absDiff = Math.abs(firstArray[i] - secondArray[i])**2;
            finalArray.push(absDiff);
            
        } else if (firstArray[i]<secondArray[i]) {
    
            let absDiff = Math.abs(secondArray[i] - firstArray[i])**2;
            finalArray.push(absDiff);
            
        } else {
            
            finalArray.push(0);
        }
    }

    let total = 0;
    for (let i of finalArray) {

        total += i;
    }

    let result = total/finalArray.length;
    
    return result
  
}

console.log(meanSquareError([10,20,10,2],[10,25,5,-2]))



// Samples
// ([1,2,3],[4,5,6]), 9)
// ([10,20,10,2],[10,25,5,-2]), 16.5)
// ([0,-1], [-1,0]), 1)