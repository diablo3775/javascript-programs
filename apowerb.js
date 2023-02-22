function power(num,pow) {
  let result = 1;
  for(let i = 0;i < pow;i++) {
    result *= num;
  }
  return result;
}

console.log(power(2,4))
