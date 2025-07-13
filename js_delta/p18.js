//generate random number between 1 to 6
let randomNum = Math.floor(Math.random()*6) + 1;
let start = prompt("Please enter ok to roll the dice");
if (start === "ok" || "Ok" || "OK"){
    console.log(`Your value on dice is ${randomNum}`);
}
