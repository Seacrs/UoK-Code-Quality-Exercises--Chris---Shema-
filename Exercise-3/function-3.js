// Implement a JavaScript function to find the sum of all elements in an array recursively.

/**
 * Finds sum of all elements in an array recursively
 * @param {number[]} array 
 * @returns {number}
 */
const addElements = (array) => {
    if(array.length === 0) return 0;
    return array[0] + addElements(array.slice(1))
}