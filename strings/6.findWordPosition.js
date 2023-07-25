//Determine the position of the word "Nemo" and return a string in the following manner: "I found Nemo at [position of the word nemo]!"

//If there are multiple instances of the word, return the string for the first occurence.
//If you can't find Nemo, return "I can't find Nemo :("

const str = "I am finding Nemo";

const findWordPosition = (str, check) => {
  let result = str.split(' ')
  for(let i = 0;i < result.length;i++) {
    if(result[i] === check) {
      return `I found ${check} at ${i + 1}`
    }
  }  
    return `I can't find ${check}!`;
}
console.log(findWordPosition(str, "Nemo"));
