function getStringLength(str) {
    let length = 0;
    for (let i = 0; str[i]; i++) {
      length++;
    }
    return length;
  }
  
  console.log(getStringLength('boyoo'))
