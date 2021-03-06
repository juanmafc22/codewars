// Write a function validSolution/ValidateSolution/valid_solution()
// that accepts a 2D array representing a Sudoku board,
// and returns true if it is a valid solution, or false otherwise.
// The cells of the sudoku board may also contain 0's, which will represent empty cells.
// Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

function validSolution(board){

    // 45 is the magic number for each column/row: 1+2+3...+9 = 45
    // 405 is the magic number for the rows (9 rows at 45 each): 9 * 45 = 405
    // 405 is the magic number for the columns (9 columns at 45 each): 9 * 45 = 405
    // 810 is the TOTAL magic number: 405 + 405 = 810
    
    function calculate(total, num) {
        return total + num;
    }

    let sumOfRows = 0;
    for (let i=0; i<board.length; i++) {

        let sum = board[i].reduce(calculate, 0);
        sumOfRows += sum;
    }

    let sumOfColumns = 0;
    for (let i=0; i<board.length; i++) {

        let sum = 0;
        for (let j=0; j<board.length; j++) {

            sum += board[j][i];
            // console.log("El elemento a sumar:", board[j][i]);
        }
        sumOfColumns += sum;
    }

    // console.log("The sum of rows:", sumOfRows);
    // console.log("The sum of columns:", sumOfColumns);

    return (sumOfRows == 405 && sumOfColumns == 405);

    

    

}

console.log(
    validSolution([
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
]));

// Samples
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true

// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false
