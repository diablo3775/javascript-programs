function fibonacci(n) {
    let a = 0,b = 1,series="0,1",c;
    for(let i = 1; i < n; i++) {
        c = a + b;
        b = a;
        a = c;
        series += `,${c}`
    }
    return series
}
console.log(fibonacci(13))
  
