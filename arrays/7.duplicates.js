const arr = [0,0,1,1,1,2,2,3,3,4];
const unique = [];

for (let i = 0; i < arr.length; i++) {
  if (unique.indexOf(arr[i]) === -1) {
    console.log(unique.indexOf(arr[i]))
    unique.push(arr[i]);
  }
}

console.log(unique);

//2nd way
let b = {};

for(let i = 0;i < arr.length;i++) {
  b[arr[i]] = b[arr[i]] + 1 || 1;
}

console.log(b)

for(let key in b) {
  console.log(key)
} 
