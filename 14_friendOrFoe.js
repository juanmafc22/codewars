// Solved 2022-07-05

// Friend or Foe?

// Make a program that filters a list of strings and returns a list
// with only your friends name in it. If a name has exactly 4 letters in it,
// you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Solution
// 1. Create a new array filtering all the elements of friends array that have a length
// of 4 characters.
// 2. Return that array

function friend(friends){

    const result = friends.filter(friend => {
        return friend.length == 4;
    })

    return result;

}

console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))


// Samples
// ["Ryan", "Kieran", "Mark"], ["Ryan", "Mark"]
// ["Ryan", "Jimmy", "123", "4", "Cool Man"], ["Ryan"]
// ["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"], ["Jimm", "Cari", "aret"]
// ["Love", "Your", "Face", "1"], ["Love", "Your", "Face"]