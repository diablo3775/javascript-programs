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