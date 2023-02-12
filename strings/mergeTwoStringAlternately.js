function addString(firststr,secondstr) {
  let newStr = "";
  let result = (firststr.length,secondstr.length)
  for(let i = 0;i < result;i++) {
    if(i < firststr.length) {
      newStr += firststr[i]
    }
    if(i < secondstr.length) {
      newStr += secondstr[i]
    }
  }
  return newStr;
}

console.log(addString("ace","bdf"))
