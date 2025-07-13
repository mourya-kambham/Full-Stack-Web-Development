//Delete all elements of a given num in array
let arr = [1,2,3,4,5,6,2,3];
let num = prompt("Enter num to be deleted: ");
let n = parseInt(num);
for(let i=0; i<arr.length; i++){
    if(arr[i] === n){
        arr.splice(i,1);
    }
}
console.log(arr);