//check last digit of two numbers
let num1 = 324;
let num2 = 47852;
if(num1%10 === num2%10){
    console.log(`${num1} and ${num2} have the same last digit`);
}else{
    console.log("Different digits");
}