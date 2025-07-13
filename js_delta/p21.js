//Return elements larger than a number
let array = [13, 7, 43, 26, 35, 19, 2, 50, 20];
let find = function(array,n){
    for(let i=0;i<array.length;i++){
        if(array[i]>n){
            console.log(array[i]);
        }
    }
}
find(array,15);
