let arr=[1,2,4,2,2,2,5,5,5,5,5,1,1,1]

let b = {};
arr.map((a) => b[a] = b[a] + 1 || 1)

const highestValue = Math.max(...Object.values(b));
const keyOfHighestValue = Object.keys(b).find(key => b[key] === highestValue);
console.log(keyOfHighestValue)
