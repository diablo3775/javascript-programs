//finding the nth highest element in the array;
function nthHighest(arr, n) {
    arr.sort((a, b) => b - a);
    return arr[n - 1];
}

console.log(nthHighest([1, 2, 45, 56, 67], 1));
