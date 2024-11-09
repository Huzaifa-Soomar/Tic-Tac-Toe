let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")


let turnO = true;

// const checkDraw = () => {
//     let filledBoxes = 0;
//     for (let boxes of box) {
//         if (box.innerText !== '') {
//             filledBoxes++;
//         }
//     }
//     if (filledBoxes === 9) {
//         msg.innerText = "It's a draw!";
//         msgContainer.classList.remove("hide");
//         disableBoxes();
//     }
// };

// checkDraw();

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetGame  = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

box.forEach((box) => {
    box.addEventListener("click" , () =>{
        
       
        if (turnO) {
            box.innerText ="O";
            turnO = false; 
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const disableBoxes =() =>{
    for(let boxes of box){
        boxes.disabled= true;
    }
}

const enableBoxes =() =>{
    for(let boxes of box){
        boxes.disabled= false;
        boxes.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations!! winner is ${winner} `;
    msgContainer.classList.remove("hide");
    disableBoxes();

}


const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1Val = box[pattern[0]].innerText;
        let pos2Val = box[pattern[1]].innerText;
        let pos3Val = box[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val !="" && pos3Val !="") {
            if (pos1Val===pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
            
        }
    }

    
};
const checkDraw = () => {
    let filledBoxes = 0;
    for (let boxes of box) {
        if (box.innerText !== '') {
            filledBoxes++;
        }
    }
    if (filledBoxes === 9) {
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
};

checkDraw();





newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);
