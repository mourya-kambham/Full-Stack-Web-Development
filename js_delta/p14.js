//Find number of digits in a number
let number = 2321872;
let count = 0;
let copy = number;
while(copy>0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(`Number of digits is ${count}`);