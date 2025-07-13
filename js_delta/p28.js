//arrow function for finding array Average
const arrayAverage = (arr) =>{
    let total = 0;
    for(let number of arr){
        total+=number;
    }
    return total/arr.length
};

let arr = [1,2,3,4,19];
console.log(arrayAverage(arr));