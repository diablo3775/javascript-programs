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
function longestString(...str) {
  let longest = "";
  for(let i = 0;i < str.length;i++) {
    if(str[i].length > longest.length) {
      longest = str[i] || longest;
    } 
  }
  return longest;
}

console.log(longestString("Likitha","Bindu","Sarayu"))
