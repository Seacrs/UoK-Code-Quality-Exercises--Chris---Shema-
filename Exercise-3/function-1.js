// Write a function(s) that checks the level of nesting of an array. 
// Then, use that function to flatten the array into a single-dimensional array.

const getDepth = (array) => {
    let maxDepth = 0;
    array.forEach(item => {
        if(Array.isArray(item)){
            maxDepth = Math.max(maxDepth, getDepth(item));
        }
    });
    return maxDepth + 1;
}

const flatten = (array) => {
    const maxDepth = getDepth(array);
    return array.flat(maxDepth);
}