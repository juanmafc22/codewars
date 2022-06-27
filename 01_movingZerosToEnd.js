// Solved 2022-06-03

// Write an algorithm that takes an array and moves all of the zeros to the end, 
// preserving the order of the other elements.
// 
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// 
// use two filters?
// use the first filter to remove all the zeros and leave the array clean,  then load
// all the values into a new array

// use the second filter to remove all the zeros and move them to a second array

// join the two arrays with a concat()

function moveZeros(arr) {

    // filter out all the non zero elements
    let nonZeroElements = arr.filter(element => {
        return element !== 0;
    });


    // filter out all the  zero elements
    let zeroElements = arr.filter(element => {
        return element === 0;
    });


    let result = nonZeroElements.concat(zeroElements);

}

console.log(moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]))
