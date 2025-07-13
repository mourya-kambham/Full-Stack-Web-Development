let gameSeq = [];
let userSeq = [];
let highestLevel = 0;
let level = 0;
let started = false;

let btns = ["red", "orange", "green", "blue"];

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIndex = Math.floor(Math.random()*3);
    let randColor = btns[randIndex];
    let randButton = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randButton);
}

function checkAns(Idx){
    if(userSeq[Idx] === gameSeq[Idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        let body = document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(function(){
            body.style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    if(highestLevel<level){
        highestLevel = level;
    }
    h3.innerText = `Current Highest score: ${highestLevel}`;
    level=0;
}