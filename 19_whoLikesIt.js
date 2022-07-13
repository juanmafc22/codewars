// Solved 2022-07-13

// People can "like" blog posts, pictures or other items.
// We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing
// the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

// Solution
// 1. Get the length of the names array and test if the length is equal to 0, 1, 2, 3 or more, return
// the corresponding message.

function likes(names) {

    const namesLength = names.length;

    if (namesLength == 0) {
        return "no one likes this";
    } else if (namesLength == 1) {
        return names[0] + " likes this";
    } else if (namesLength == 2) {
        return names[0] + " and " + names[1] + " like this";
    } else if (namesLength == 3) {
        return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    } else {
        let theRest = namesLength - 2;
        return names[0] + ", " + names[1] + " and " + theRest + " others like this";
    }
}

console.log(likes(['Jacob', 'Alex', 'Juan', 'Manuel', 'Nico', 'Peter', 'Andrew']));



// Samples
// strictEqual(likes([]), 'no one likes this');
// (likes(['Peter']), 'Peter likes this');
// (likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
// (likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
// (likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');