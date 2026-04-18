// Write a JavaScript function to check if a given number is prime or not.

/**
 * Check is a number is prime or not
 * @param {number} num
 * @returns {boolean}
 */
const isPrime = (num) => {
    if(num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}