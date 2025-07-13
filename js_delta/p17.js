//largest number in an array with only positive integers
let arr = [207, 105, 43, 91, 37];
let largest = arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>largest){
        largest = arr[i];
    }
}
console.log(`Largest number in the array is ${largest}`);