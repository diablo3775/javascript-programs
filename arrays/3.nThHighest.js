//finding the nth highest element in the array;
function maxi(arr,n) {
    let highest = arr[0];
    for(let i = 0;i < arr.length;i++) {
      if(arr[i] > highest) {
        highest = arr[i];
      }
    }
    return highest - n;
  }
  
  console.log(maxi([1,2,3,4,5,6,7,8],1))
