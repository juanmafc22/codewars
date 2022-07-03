// Solved 2022-07-03

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet:
// a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

// Solution
// 1. determine the alphabet, the position of each char in the alphabet string will determine its value
// ie. a=1, b=2, c=3, etc
// 2. declare and initialize an array of words, done by splitting the string passed in the paramter of the function
// 3. iterate through each word in the array
// 4. iterate through each char in each word
// 5. iterate through all the words in the alphabet
// 6. if the char is the same as the letter of the alphabet, add the value of that char to a previously
// declared wordSubMax variable to calculate the value of each word (the sum of all its characters)
// 7. if the wordSubMax is greater to an accumulator variable previously initialized to 0 (max), then 
// that will be the max

function high(string) {

    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    let words = string.split(" ");

    let max = 0
    let maxIndex = 0;

    for (i=0; i<words.length; i++) {

        let wordSubMax = 0;
        
        for (j=0; j<words[i].length; j++) {

            for (k=0; k<alphabet.length; k++) {

                if ( words[i].charAt(j) == alphabet[k] ) {
                    wordSubMax += k + 1;
                }
            }
        }

        if (wordSubMax > max) {
            max = wordSubMax;
            maxIndex = i;
        }
    }

    return words[maxIndex];
}

console.log(high("take me to semynak"));

// Samples
// ('man i need a taxi up to ubud'), 'taxi');
// ('what time are we climbing up the volcano'), 'volcano'); 
// ('take me to semynak'), 'semynak');   
// ('aa b'), 'aa');
// ('b aa'), 'b');
// ('bb d'), 'bb');
// ('d bb'), 'd');
// ('aaa b'), 'aaa');
