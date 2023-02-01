function highestNumber(arr) {
    let highestValue = 0;
    for(let i = 0; i < arr.length; i++) {
            if(arr[i] > highestValue) {
                highestValue = arr[i];
        }
    }
    return highestValue;
  }
  
  
  console.log(highestNumber([23,4,2,13,34335,2442]))