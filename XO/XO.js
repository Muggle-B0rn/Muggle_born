let playero="O";
let playerx="X";
let currplayer =playero;
let gamestate;
let winsound= new Audio("bravoo 3aleek.mp3");
let drawsound=new Audio("7mada hambaka.mp3");

let gameboard =["","","","","","","","",""];
let gameCells;
let winconditions=[
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]  
];
let gameover=false;

function placecell(){
    if(gameover){
        return;
    }
    const index=parseInt(this.getAttribute("data-cell-index"));
    if(gameboard[index]!=""){
        return;
    }
    this.innerText=currplayer;
    gameboard[index]=currplayer;
    currplayer=(currplayer==playero)? playerx :playero;
    checkwin();
}

function checkwin(){
for(let wincondition of winconditions){
    let a=gameboard[wincondition[0]];
    let b=gameboard[wincondition[1]];
    let c=gameboard[wincondition[2]];

    if(a==b&&b==c&&a!=""){

        for(let i=0;i<gameboard.length;i++){

            if(wincondition.includes(i)){
                gameCells[i].classList.add("winning-game-cell");
            }
        }
        gameover=true;
        winsound.play();
        gamestate.innerText="Winner: "+a;
        return;
    }

}
if(!gameboard.includes("")){
    gameover=true;
    drawsound.play();
    gamestate.innerText="Draw!!";
}
}

window.onload =function(){
    gamestate = document.getElementById("gamestate");
    gameCells=document.getElementsByClassName("game-cell");
    for(let cell of gameCells){
        cell.addEventListener("click",placecell);
    }
    restartgamebutton=document.getElementById("game-restart-butt");
    restartgamebutton.addEventListener("click",restartgame);
}
function restartgame(){
    gameover=false;
    gameboard=["","","","","","","","",""];
    for(let cell of gameCells){
        cell.innerText="";
        cell.classList.remove("winning-game-cell");
    }
    gamestate.innerText="";
}
