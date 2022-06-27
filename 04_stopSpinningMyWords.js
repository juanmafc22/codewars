// Solved 2022-06-27
// Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words,
// and returns the same string, but with all five or more letter words reversed
// (Just like the name of this Kata). Strings passed in will consist of only
// letters and spaces. Spaces will be included only when more than one word is present.

// Examples:
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" ) => returns "This is rehtona test"

// Solution
// 1. split the string into an array
// 2. iterate through all the array elements checking of the words have 5 or more chars
// 3. if the words don't have more than 5 chars push it into a newArray
// 4. if the words have more than 5 chars spinn(reverse) them
// 5. join the newly formed array into a string and return it


function spinWords (string) {

    const wordsArray = string.split(" ");
    let newArray = [];

    for (let i=0; i<wordsArray.length; i++) {
        if (wordsArray[i].length < 5) {
            newArray.push(wordsArray[i]);
        } else {
            let reversedString = "";
            for (let j=wordsArray[i].length - 1; j>=0; j--) {
                reversedString += wordsArray[i][j];
            }
            newArray.push(reversedString);
        }
    }

    const result = newArray.join(" ");
    return result;

}

console.log(spinWords("Just kidding there is still one more"))

// Samples
// (spinWords("Welcome"), "emocleW");
// (spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
// (spinWords("This is a test"), "This is a test");
// (spinWords("This is another test"), "This is rehtona test");
// (spinWords("You are almost to the last test"), "You are tsomla to the last test");
// (spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
// (spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");