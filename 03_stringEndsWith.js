// Solved 2022-06-27

// Complete the solution so that it returns true if the
// first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// Test.assertEquals(solution('abcde', 'cde'), true)
// Test.assertEquals(solution('abcde', 'abc'), false)

// Solution
// iterator i is set to start at the diff in num of chars between str and ending
// it iterates until the end of the string accumlating all the chars into checkThis
// the final if statement checks if checkThis is the same as ending

function solution(str, ending){

    let checkThis = "";

    for (let i=(str.length - ending.length); i<str.length; i++) {
        checkThis += str[i];
    }
    
    if (checkThis === ending) {
        return true;
    } else {
        return false;
    }

}

console.log(solution('abcdefg', 'cdefg')); // this returns true
// console.log(solution('abcdfg', 'cdefg')); // this returns false

