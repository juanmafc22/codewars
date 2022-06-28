// Solved 2022-06-28
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels
// from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string
// with all vowels removed.

// For example, the string "This website is for losers LOL!" would become
// "Ths wbst s fr lsrs LL!".

// Solution
// 1. feed all the letters of str into an array: wordsArr
// 2. declare an array with all the vowels, lower and uppercase: vowelArr
// 3. for each element of wordsArr check if it is the same as any of the
// vowerlArr elements, if true splice it out of the array
// 4. feed all te remaining letter into the result string: resultStr 

function disemvowel(str) {
    
    const wordsArr = str.split("");
    const vowelsArr = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    let resultStr = "";

    for (let i=0; i<wordsArr.length; i++) {
        for (j=0; j<vowelsArr.length; j++) {
            if (wordsArr[i] == vowelsArr[j]) {
                wordsArr.splice(i, 1);
            } 
        }
    }
    
    for (let i=0; i<wordsArr.length; i++) {
        resultStr += wordsArr[i];
    }

    return resultStr;
    
}

console.log(disemvowel("What are you, a communist?"))

// Samples
// (("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
// (("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
// (("What are you, a communist?"), "Wht r y,  cmmnst?")

