let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#newgame-btn");
let MsgContainer = document.querySelector(".MsgContainer");
let msg = document.querySelector("#msg");

//Player - X and Player - O

let player_O = true;

const win_Pattern = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (player_O == true) {

            box.innerText = "O";
            player_O = false;
        }
        else {
            box.innerText = "X";
            player_O = true;
        }

        box.disabled = true;

        checkWinner();


    });
});
const disablebtns = () =>
{
    for(let box of boxes) {
        box.diabled = true;
    }
};
const enablebtns = () =>
{
    for(let box of boxes) {
        box.diabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {

    msg.innerText = `Congratulations winner is ${winner} !!!`;
    MsgContainer.classList.remove("hide");
};

const checkWinner = () => {
    for (let pattern of win_Pattern) {

        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;

        if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
            if (pos1Value == pos2Value && pos2Value == pos3Value) {

                showWinner(pos1Value);
            }

        }
    }
};

const resetgame = () => {
    player_O = true;
    enablebtns();
    MsgContainer.classList.remove("hide");

};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
