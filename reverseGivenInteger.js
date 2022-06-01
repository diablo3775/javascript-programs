// function to reverse a given integer number 
function reverseInt(num) {
    var rev = 0;
    while (num > 0) {
        rev = rev * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return rev;
}

console.log(reverseInt(1589));

