//Find element in an array
let arr = [20, 4, 33, 19, 7];
let reqElement = prompt("Enter the element to identify: ");
let n = parseInt(reqElement);
let count = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i] === n){
        console.log(`${reqElement} is inside the array`);
        count = 1;
        break;
    }
}
if(count === 0){
    console.log(`${reqElement} is not inside the array`);
}
/*To use only if function then we can give condition arr.indexOf(n) != -1 */