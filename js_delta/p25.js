//Random Number within a given range
function randomNum(start,end){
    let range = end-start+1;
    let Num = Math.floor(Math.random()*range)+start;
    return Num;
}
console.log(randomNum(5,9));