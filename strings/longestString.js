//1st way
const longestString = (...args) => {
    let longest = "";
    for(let arg of args) {
        arg.length > longest.length 
        ? (longest = arg) 
        : longest;
    }
    return longest;
}

console.log(longestString("Likitha","Bindu","Sarayu"))

//2nd way
function longestString(...arr) {
  let longest = "";
  for(let i = 0;i < arr.length;i++) {
    if(arr[i].length > longest.length) {
      longest = arr[i] || longest;
    } 
  }
  return longest;
}

console.log(longestString("Likitha","Bindu","Sarayu"))
