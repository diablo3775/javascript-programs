//Find the nth lowest element in an array
function nthLowest(arr, n) {
    arr.sort((a, b) => a - b);
    return arr[n - 1];
}

console.log(nthLowest([1, 2, 45, 56, 67], 1));
