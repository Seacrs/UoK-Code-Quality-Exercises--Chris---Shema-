// Format any integer provided into a string with "," (commas) in the correct places.

// Example:

// For n = 100000 the function should return '100,000';
// For n = 5678545 the function should return '5,678,545';
// for n = -420902 the function should return '-420,902'.

function numberFormat(number){
    const isNegative = number < 0;
    const str = String(Math.abs(number)).split("").reverse().join("");
    const arr = [];

    for (let i = 0; i < str.length; i += 3){
        arr.push(str.slice(i, i + 3));
    }

    const result = [];
    for(let i = arr.length - 1; i >= 0; i-- ){
        result.push(arr[i].split("").reverse().join(""))
    }

    return isNegative ? `-${result.join(",")}` : result.join(",");
}