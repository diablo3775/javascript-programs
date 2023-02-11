//finding the nth lowest element in the array;
function maxi(arr,n) {
    let lowest = arr[0];
    for(let i = 0;i < arr.length;i++) {
      if(arr[i] < lowest) {
        lowest = arr[i];
      }
    }
    return lowest + n;
  }
  
  console.log(maxi([1,2,3,4,5,6,7,8],1))
