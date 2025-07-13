//Min number in array using reduce method
let array = [23, 5, 19, 43, 36, 2, 92];
let getMin = array.reduce((min, el) => {
    if(el < min){
        return el;
    }else{
        return min;
    }
 }
);
console.log(getMin);