// Implement a JavaScript function to calculate the Fibonacci sequence up to a given number.

/**
 * Generates Fibonacci numbers up to value n
 * @param {number} n 
 * @returns {number[]}
 */
function fibonacci(n){
    if(n < 0) return [];
    if(n === 0) return [0];

    const arr = [0, 1];

    let sum = arr[1] + arr[0];

    while(sum <= n){
        arr.push(sum);
        sum = arr[arr.length - 1] + arr[arr.length - 2];
    }

    return arr;
}