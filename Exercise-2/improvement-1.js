// Function 1

/**
 * Calculates the average of a list of numbers
 * @param {number[]} numbers 
 * @returns {number}
 */

const calculateAverage = (numbers = []) => {
    if(numbers.length === 0) return 0;
    return numbers.reduce((acc, curV)=> acc + curV, 0) / numbers.length;
}