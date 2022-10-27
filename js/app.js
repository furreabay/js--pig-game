const playerOnePanel = document.querySelector(".player-0-panel");
const playerTwoPanel = document.querySelector(".player-1-panel");

const playerOneName = document.getElementById("name-0");
const playerTwoName = document.getElementById("name-1");
const playerOneDefaultName = document.getElementById("name-0").textContent;
const playerTwoDefaultName = document.getElementById("name-1").textContent;

const newGame = document.querySelector(".btn-new");
const rollButton = document.querySelector(".btn-roll");;
const holdPoints = document.querySelector(".btn-hold");

const diceImage = document.querySelector(".dice");

const scoreOne = document.getElementById("score-0");
const scoreTwo = document.getElementById("score-1");

const totalScoreOne = document.getElementById("current-0");
const totalScoreTwo = document.getElementById("current-1");

let playerOneRoundPoints = 0;
let playerTwoRoundPoints = 0;

let playerOneTotalPoints = 0;
let playerTwoTotalPoints = 0;

let maxPoints = 100;

rollButton.addEventListener("click", rollDice);
holdPoints.addEventListener("click", keepPoints)
newGame.addEventListener("click", startNewGame)

function gameOver() {
    if ((playerOneTotalPoints || playerTwoTotalPoints) == maxPoints) {
        rollButton.style.pointerEvents = "none";
        holdPoints.style.pointerEvents = "none";
    }

    if (playerOneTotalPoints == maxPoints) {
        playerOneName.textContent = "VINNARE!!!"

    } else if (playerTwoTotalPoints == maxPoints) {
        playerTwoName.textContent = "VINNARE!!!"
    }
}

function keepPoints() {
    //add the roundpoints to the totalpoints
    if ((playerOneTotalPoints + playerOneRoundPoints < maxPoints) && (playerTwoTotalPoints + playerTwoRoundPoints < maxPoints)) {
        if (playerOnePanel.classList.contains("active")) {
            playerOneTotalPoints += playerOneRoundPoints;
        }
        else if (playerTwoPanel.classList.contains("active")) {
            playerTwoTotalPoints += playerTwoRoundPoints;
        }
        //Assign the value to the score element
        totalScoreOne.textContent = playerOneTotalPoints.toString();
        totalScoreTwo.textContent = playerTwoTotalPoints.toString();

        playerOneRoundPoints = 0;
        playerTwoRoundPoints = 0;

        changeActive()
    } else {
        if (playerOnePanel.classList.contains("active")) {
            playerOneTotalPoints = maxPoints;
        }
        else if (playerTwoPanel.classList.contains("active")) {
            playerTwoTotalPoints = maxPoints;
        }

        totalScoreOne.textContent = playerOneTotalPoints.toString();
        totalScoreTwo.textContent = playerTwoTotalPoints.toString();

        playerOneRoundPoints = 0;
        playerTwoRoundPoints = 0;
        scoreOne.textContent = playerOneRoundPoints.toString();
        scoreTwo.textContent = playerTwoRoundPoints.toString();
    }
    gameOver();
}

function startNewGame() {
    rollButton.style.pointerEvents = "all";
    holdPoints.style.pointerEvents = "all";

    playerOneRoundPoints = 0;
    playerTwoRoundPoints = 0;
    scoreOne.textContent = playerOneRoundPoints.toString();
    scoreTwo.textContent = playerTwoRoundPoints.toString();

    playerOneTotalPoints = 0;
    playerTwoTotalPoints = 0;
    totalScoreOne.textContent = playerOneTotalPoints.toString();
    totalScoreTwo.textContent = playerTwoTotalPoints.toString();

    diceImage.src = "img/dice-6.png"

    playerOneName.textContent = playerOneDefaultName;
    playerTwoName.textContent = playerTwoDefaultName;
}

function randomDice() {
    const randomGenerator = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    diceImage.src = "img/dice-" + randomGenerator + ".png"
    console.log(randomGenerator)
    console.log("==============")

    return randomGenerator;
}


function rollDice() {
    const diceRolled = randomDice();
    //Makes current diceroll value add to the round point
    if (playerOnePanel.classList.contains("active")) {
        if (diceRolled == 1) {
            playerOneRoundPoints = 0;
            changeActive();
        } else {
            playerOneRoundPoints += diceRolled;
        }
    }
    else if (playerTwoPanel.classList.contains("active")) {
        if (diceRolled == 1) {
            playerTwoRoundPoints = 0;
            changeActive();
        } else {
            playerTwoRoundPoints += diceRolled;
        }
    }

    //Assign the value to the score element
    scoreOne.textContent = playerOneRoundPoints.toString();
    scoreTwo.textContent = playerTwoRoundPoints.toString();
}



function changeActive() {
    if (playerOnePanel.classList.contains("active")) {
        playerOnePanel.classList.remove("active");
        playerTwoPanel.classList.add("active");
    } else {
        playerOnePanel.classList.add("active");
        playerTwoPanel.classList.remove("active");
    }
}