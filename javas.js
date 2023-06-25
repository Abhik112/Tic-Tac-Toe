console.log("Welcome to Tic Tac Toe");
let music = new Audio('music.wav');
let gameOver = new Audio('gameOver.mp3');
let audioTurn = new Audio('turn.wav');
let isgameover = false;

let turn = "X"

//function for turns
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//function for win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxTexxt');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            isgameover = true;
            gameOver.play();
        }
    })
}

//gameLogic
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxTexxt');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//On-click listener to reset
reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll('.boxTexxt')
    Array.from(boxText).forEach(element => {
        element.innerText = "";
    })
    isgameover = false;
    turn = "X"
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
})