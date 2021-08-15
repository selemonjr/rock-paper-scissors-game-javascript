let modeEl = document.querySelector("#mode");
let scissorsEl = document.querySelector("#scissors-el");
let paperEl = document.querySelector("#paper-el");
let rockEl = document.querySelector("#rock-el");
let resetEl = document.querySelector("#reset")
let startEl = document.querySelector("#start-el");
let gameEl = document.querySelector("#game")
let gameText = document.querySelector("#game-text")
let gameTextEl = document.querySelector("#game-text-2")
let scoreEl = document.querySelector("#score-el");
let chanceEl = document.querySelector("#chance")
let player1El = document.querySelector("#choice-1-el");
let computer1El = document.querySelector("#choice-2-el");
let maxCount = 10;
let array = ["Scissors","Rock","Paper"];
let empty = " ";
let paper = array[2];
let count = 0
let scissors = array[0];
let rock = array[1];
paperEl.addEventListener("click", () => {
    player1El.textContent = "Your Pick : " + paper;
})
rockEl.addEventListener("click", () => {
    player1El.textContent ="Your Pick : " + rock;
})
scissorsEl.addEventListener("click", () => {
    player1El.textContent ="Your Pick : " + scissors;
})
startEl.addEventListener("click",() => {
    function add() {
        return Math.floor(Math.random() * array.length);
    };
    let random = array[add()];
    console.log(random);
    computer1El.textContent = "Computer Picks : " +random;

    

})
modeEl.addEventListener("click",() => {
    let dark = document.body; {
        dark.classList.toggle("dark-theme")
    };
    if (modeEl.textContent === "Change Mode") {
        modeEl.textContent = "Light Mode";
    } else {
        modeEl.textContent = "Change Mode";
    }

});
gameEl.addEventListener("click",() => {
    player1El.textContent= "Your Pick ";
    computer1El.textContent = "Computer Pick ";
    count++;
    if(count < maxCount) {
        gameText.textContent = "Round : " + count;
    } else {
        gameText.textContent = "Max Rounds: 10";
        gameTextEl.textContent = "Refresh the page"
    }
})
resetEl.addEventListener("click",() => {
    count;
    gameText.textContent = "Start Round";
    player1El.textContent="" ;
    computer1El.textContent = ""

});


