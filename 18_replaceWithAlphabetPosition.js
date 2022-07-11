// Solved 2022-07-11

// You are required to, given a string, replace every letter
// with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

// Solution
// 1. Make an array with the alphabet
// 2. Turn the text passed by params into lowercase and make an array (textArray) out of its characters
// 3. Iterate through the textArray letters 
// 4. Iterate through the alphabet letters
// 5. If the two match: add them to the result string.
// - if the result string is empty only add the letter, if it isn't add a space before the letter


function alphabetPosition(text) {
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split("");
    
    const textArray = text.toLowerCase().split("");
    
    let result = "";

    for (let i=0; i<textArray.length; i++) {

        for (let j=0; j<alphabetArray.length; j++) {

            if (textArray[i] == alphabetArray[j]) {
                
                if (result.length == 0) {
                    result += (j + 1);
                } else {
                    result += " " + (j + 1);

                }
            }   
        }
    }
    return result;
}

console.log(alphabetPosition("The narwhal bacons at midnight."))


// Samples
// ("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
// ("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
