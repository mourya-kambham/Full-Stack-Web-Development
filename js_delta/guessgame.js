const max = prompt("Enter max number");

const random = Math.floor(Math.random()*10)+1;

let guess = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("Quitting game");
        brreak;
    }

    if(guess == random){
        console.log("You are Right!");
        break;
    }else if(guess<random){
        guess = prompt("Your guess is smaller number , try again")
    }else if(guess>random){
        guess = prompt("Your guess is larger number , try again")
    }
}