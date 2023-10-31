//frequent item in an array
let arr = [1,2,3,4,4,7,7,7,7,7,5]

let obj = {};
for(let i = 0; i < arr.length; i++) {
  obj[arr[i]] = obj[arr[i]] + 1 || 1;
}

let highestValue = arr[0];
for(const values in obj) {
  if(obj[values] > highestValue) {
    highestValue = obj[values]
  }
}

let highestKey = arr[0];
for(const keys in obj) {
  if(obj[keys] === highestValue) {
   highestKey = keys;
  }
}
console.log(highestKey)
