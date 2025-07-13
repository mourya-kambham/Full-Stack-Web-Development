//Finding whether char at given index is lowercase or not
let str = "ApNaColleGe";
let strNew = str.toLowerCase();
let n = prompt("Enter the index to identify");
if(str[n] === strNew[n]){
    console.log("Character at the given index is lower case");
}else{
    console.log("Character at the given index is upper case");
}