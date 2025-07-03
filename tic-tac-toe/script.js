let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset-btn")
let newBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turn0 = true;

let winnigPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turn0 = true;
    enableboxes();
    msgContainer.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false
        }
        else {
            box.innerText = "X"
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();

    })
});
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

}
const showWinner = (winner) => {
    msg.innerText = `congratulations: winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};
const checkWinner = () => {
    for (let Patterns of winnigPatterns) {
        let pos1val = boxes[Patterns[0]].innerText;
        let pos2val = boxes[Patterns[1]].innerText;
        let pos3val = boxes[Patterns[2]].innerText

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        }
    }
};

newBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);