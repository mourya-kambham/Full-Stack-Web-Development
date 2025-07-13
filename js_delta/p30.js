//Array methods for finding RMS value
let nums = [1,2,3,4,5];
let square = nums.map((num) => num*num);
let sum = square.reduce((acc,el) => acc+el,0);
let avg = sum/ nums.length;
console.log(avg);