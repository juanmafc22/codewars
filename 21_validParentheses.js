// Solved 2202-07-27

// Write a function that takes a string of parentheses, and determines if the
// order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.
// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Solutin
// 1. Define a hashmp, where the keys are the opening brackets and the values are the
// corresponding closing brackets, (:), [:] and {:}
// 2. Define a stack represented as an array
// 3. Iterate through the chars of the string
// 3.1. If the char is one of the keys of the hashmap, push its corresponding value into the stack array
// 3.2. If it's not an opening bracket (a hashmap key), it must be a closing bracket (a hashmap value)
// go to the back of the stack and pop the corresponding closing bracket
// 3.3. The process should have left he stack empty if all opening braces had an equivalente closing brace.
// Return true or false depending on the tru



function validParentheses(parens) {
    
    const hashMap = { "(":")", "[":"]", "{":"}"};
    const stack = [];

    for (let ch of parens) {

        if (hashMap[ch]) {
            // ch is an opening bracket
            stack.push(hashMap[ch]);
        } else if (stack.length > 0 && stack[stack.length -1] === ch) {
            // ch is a closing bracket and top of stack matches
            stack.pop();
        } else {
            // ch is a closing bracket adn top of the stack doesn't match
            return false;
        }
    }
    return stack.length === 0;

}

console.log(validParentheses("()()())"));



// Samples
// ( "(" ), false
// ( ")" ), false
// ( "" ), true
// ( "()" ), true
// ( "())" ), false
// ( "()()()()((((()))))" ) true
// ( "((()" ) false