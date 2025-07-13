//Slice elements from back
let arr = [7,9,0,-2];
let n = 3;
if(n <= arr.length){
    newArr = arr.slice(arr.length-n,arr.length);
    console.log(newArr);
}else{
    console.log(`${n} exceeds length of the array`);
}
