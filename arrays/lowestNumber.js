function lowestNumber(arr) {
    let lowest= arr[0];
      for(let j = 0; j < arr.length; j++) {
        if(arr[j] < lowest) {
          lowest = arr[j]
        }
      }
    return lowest;
  }
  
  
  console.log(lowestNumber([33,4]))