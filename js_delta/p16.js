//Factorial of a number
let num = prompt("Enter the number: ");
let n = parseInt(num);
let product = 1;
let f = 1;
for(let i=1; i<=n; i++){
    f *= i;
}
console.log(f);
