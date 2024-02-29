let arr = [1,2,3,4,5];

for(let i = 0;i < arr.length;i++) {
    for(let j =0;j < arr.length;j++) {
        console.log("Step",j);
        console.log(arr[i],"arr[i]",arr[j],"arr[j]");
        console.log("arr[i]+arr[j]",arr[i] + arr[j]);
    }
}
