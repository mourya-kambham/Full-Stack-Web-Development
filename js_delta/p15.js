//sum of digits of a number
let number = 289152;
let sum = 0;
let n = 0;
let copy = number;
while(copy>0){
    n = copy%10;
    sum = sum+n;
    copy = Math.floor(copy/10);
}
console.log(`Sum of digits is ${sum}`);