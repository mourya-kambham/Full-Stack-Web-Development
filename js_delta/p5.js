//Largest of 3 numbers
let a = 150;
let b = 501;
let c = 205;
if(a>b){
    if(a>c){
        console.log(`Largest number is ${a}`);
    }else{
        console.log(`Largest number is ${c}`);
    }
}else  if(a<b){
    if(b>c){
        console.log(`Largest number is ${b}`);
    }else{
        console.log(`Largest number is ${c}`);
    }
}