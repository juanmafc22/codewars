// Complete the function that accepts a string parameter,
// and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
//
// Test comment



function reverseWords(str) {

    let strArr = str.split(" ");

    let reversedWords = [];

    for (let i=0; i<strArr.length; i++) {

        let reversed = "";

        for (let j=strArr[i].length; j>=0; j--) {

            reversed += strArr[i].charAt(j);
        }
    

        reversedWords.push(reversed);
    }

    let result = "";

    for (let k=0; k<reversedWords.length; k++) {

        result += " ";
        
        for (let l=0; l<reversedWords[k].length; l++) {

            result += reversedWords[k].charAt[l];
        }
    }
 
    return result;
    
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));


// Samples
// ('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
// ('apple'), 'elppa');
// ('a b c d'), 'a b c d');
// ('double  spaced  words'), 'elbuod  decaps  sdrow');
