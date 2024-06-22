let boxes = document.querySelectorAll(".div");
let resetbtn = document.querySelector(".reset");
let newgame = document.querySelector(".game");
let hide = document.querySelector(".msg_contenar");
let msg = document.querySelector("#msg");
let game = document.querySelector(".game")
let turn0 = true;
let body = document.querySelector(".body")
let clickSound = new Audio('button-124476 copy.mp3');
let winSound = new Audio('ping-82822.mp3');

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame = () => {
    turn0 = true;
    enabledbtn();
    hide.classList.add("hide");
    game.classList.add("hide")
    document.body.style.backgroundColor = "#548687"
}
const disabledbtn = () => {
    for (let div of boxes) {
        div.disabled = true;
    }
}
const enabledbtn = () => {
    for (let div of boxes) {
        div.disabled = false;
        div.innerText = "";
    }
}
const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;

}

const showWinner = (winner) => {
    msg.innerText = `Congratulations winner is: ${winner}`;
    hide.classList.remove("hide");
    game.classList.remove("hide");
    setBg();
    winSound.play();
    disabledbtn();

};

boxes.forEach((div) => {
    div.addEventListener("click", () => {
        console.log("boxes was clicked");
        if (turn0) {
            div.innerText = "o";
            turn0 = false;
        } else {
            div.innerText = "x";
            turn0 = true;
        }
        div.disabled = true;
        clickSound.play();
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner");

                showWinner(pos1Val);


            }
        }
    }
};
newgame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
