//frequent item in an array
let arr = [1,2,3,4,4,7,7,7,7,7,5]

let b = {};
for(let i = 0; i < arr.length; i++) {
  b[arr[i]] = b[arr[i]] + 1 || 1;
}

let highestValue = arr[0];
for(const pro in b) {
  if(b[pro] > highestValue) {
    highestValue = b[pro]
  }
}

let highestKey = arr[0];
for(const pro in b) {
  if(b[pro] === highestValue) {
   highestKey = pro;
  }
}
console.log(highestKey)

