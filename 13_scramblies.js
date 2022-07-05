// Solved  WORK IN PROGRESS...

// Complete the function (str1, str2) that returns true if a
// portion of str1 characters can be rearranged to match str2
// otherwise returns false.

// Notes: Only lower case letters will be used (a-z).
// No punctuation or digits will be included.
// Performance needs to be considered.

function scramble(str1, str2) {

    let obj = {};
                                                                                                                                                                      
    for (let char of str2) {
        if (obj[char]) {
          obj[char]++
        }
        else {
          obj[char] = 1
        }
      }
      return obj                                                                                                                                                   
}

console.log(scramble('rkqodlw', 'juan manuel fernandez'));

// Samples
// ('rkqodlw', 'world') ==> True
// ('cedewaraaossoqqyt', 'codewars') ==> True
// ('katas', 'steak') ==> False

