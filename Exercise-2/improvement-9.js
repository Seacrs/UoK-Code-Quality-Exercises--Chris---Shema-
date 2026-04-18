// Function 9

/**
 * Calculates the total sum of all numeric values in a 2D matrix
 * 
 * @param {number[][]} matrix - a two dimensional array of numbers
 * @returns {number} the sum of all elements in the matrix
 * 
 */
const calculateMatrixSum = (matrix) => 
  matrix.map(row => row.reduce((acc, curV)=> acc + curV, 0))
        .reduce((acc, curV)=> acc + curV, 0)