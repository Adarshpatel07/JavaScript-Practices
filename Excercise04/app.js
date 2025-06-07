
let gameSqe = [];
let userSqe = [];

let started = false;
let level = 0;

let btns = ["yellow", "red", "green", "purple"];
let h2 = document.querySelector("h2");

document.addEventListener('keypress',function(event){
    if(started == false){
        console.log("! Game Hase Been Started !");
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}


function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSqe = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIndex = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIndex];
    let randBtn = document.querySelector(`.${randColor}`);
   
    gameSqe.push(randColor);
    console.log(gameSqe);
    gameFlash(randBtn);
}

function checkUserSqe(lastIndex){
    // console.log("current Level : ", level);

    if(userSqe[lastIndex] == gameSqe[lastIndex]) {
        if(userSqe.length == gameSqe.length) {
            setTimeout(levelUp, 250);
        }
    }else{
        h2.innerHTML = `Game over <b>Your Score is : ${level}</b> <br/>Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "White";
        }, 250);

        resetGame();
    }
}

function btnPress() {
    let btn = this;
    gameFlash(btn);
    
    userColor = btn.getAttribute("id");
    userSqe.push(userColor);

    checkUserSqe(userSqe.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function resetGame() {
    started = false;
    gameSqe = [];
    userSqe = [];
    level = 0;
}