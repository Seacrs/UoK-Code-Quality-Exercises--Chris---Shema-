// Function 3

/**
 * reverse a string
 * @param {string} str
 * @returns {string}
 */
const reverseString = (str) => {
    if(!str) return "Enter a String";
    return str.split("").reverse().join('');
}