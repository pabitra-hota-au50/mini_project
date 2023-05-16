let cells = document.querySelectorAll(".cell");
let statusText = document.querySelector("#status");
let restartBtn = document.querySelector("#restartBtn");
let winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "x";
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach (cell => cell.addEventListener("click", restartBtn.addEventListener("click", restartGame)));
    statusText.textContent = `${currentPlayer} turn`;

    running = true;
}
function cellClicked(){
    let cellIndex = this.getAttribute("cellIndex");

    if(options[cell,index] != "" || !running){
        return;
    }

    updateCell(this,cellIndex);
    checkWinner();
}
function updateCell(){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;

}
function changePlayer(){

}
function checkWinner(){

}
function restartGame(){

}