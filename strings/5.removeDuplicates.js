function removeDuplicateWords(str) {
  let words = str.split(' ');
  let uniqueWords = []
  for(let i = 0; i < words.length; i++) {
    if(!uniqueWords.includes(words[i])) {
      uniqueWords.push(words[i])
    }
  }
  return uniqueWords.join(' ')
}

console.log(removeDuplicateWords("do it do it"))
