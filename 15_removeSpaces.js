// Solved 2022-07-05.

// Simple, remove the spaces from the string, then return the resultant string.

// Solution
// 1. Iterate through the entire length of the x string
// 2. For every char of the string that isn't an empty space,
// add it to the result string;
// 3. Return the result string;

function noSpace(x){

    let result = "";

    for (let i=0; i<x.length; i++) {

        if (x[i] != " ") {
            result += x[i];
        }
    }

    return result;

}

console.log(noSpace('8aaaaa dddd r     '));

// Samples
// ('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
// ('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
// ('8aaaaa dddd r     '), '8aaaaaddddr');
