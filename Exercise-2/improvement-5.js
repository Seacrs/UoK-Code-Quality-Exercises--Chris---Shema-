// Function 5

/** Calculates Factorial of a number
 * @param {number} n 
 * @returns {number}
 */
const calculateFactorial = (n = 0) => {
  if (n === 0 || n === 1) return 1;
  return n * calculateFactorial(n-1);
}
