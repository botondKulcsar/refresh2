// Create variables for the game state
let player1Score = 0;
let player1Rolls = 0;
let player2Rolls = 0;
let player2Score = 0;
let player1Turn = true;

let randomNumber;

const message = document.getElementById('message');

const player1Scoreboard = document.getElementById('player1Scoreboard');
const player2Scoreboard = document.getElementById('player2Scoreboard');

const player1Dice = document.getElementById('player1Dice');
const player2Dice = document.getElementById('player2Dice');

const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');
const doubleBtn = document.getElementById('doubleOrNothing');

function gameOver() {
    rollBtn.style.display = 'none';
    doubleBtn.style.display = 'none';
    resetBtn.style.display = 'inline';
}

rollBtn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 6) + 1;

    if (player1Turn) {
        rollDicePlayer1();
    } else {
        rollDicePlayer2();
    }

    checkIfOver();

    player1Turn = !player1Turn;
})

function rollDicePlayer1(double = false, nothing = false) {
    player1Rolls++;
    checkIfDoubleOrNothing(double, nothing);
    player1Score += randomNumber;
    player1Scoreboard.textContent = player1Score;
    player1Dice.textContent = randomNumber;

    player1Dice.classList.remove('active');
    player2Dice.classList.add('active');
    message.textContent = 'Player 2 Turn';
}

function rollDicePlayer2(double = false, nothing = false) {
    player2Rolls++;
    checkIfDoubleOrNothing(double, nothing);
    player2Score += randomNumber;
    player2Scoreboard.textContent = player2Score;
    player2Dice.textContent = randomNumber;

    player2Dice.classList.remove('active');
    player1Dice.classList.add('active');
    message.textContent = 'Player 1 Turn';
}

function checkIfDoubleOrNothing(double, nothing) {
    if (double && !nothing) {
        randomNumber *= 2;
    } else if (!double && nothing) {
        randomNumber = 0;
    }
}

function checkIfOver() {
    if (player1Score >= 20 && !(player2Rolls < player1Rolls) && (player1Score > player2Score)) {
        message.textContent = 'Player 1 has won!';
        gameOver();
    } else if (player2Score >= 20 && (player2Score > player1Score)) {
        message.textContent = 'Player 2 has won!';
        gameOver();
    }
}

doubleBtn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    let double = true;
    let nothing = true;
    const random = Math.random();
    if (random < 0.5) {
        double = false;
    } else {
        nothing = false;
    }

    if (player1Turn) {
        rollDicePlayer1(double, nothing);
    } else {
        rollDicePlayer2(double, nothing);
    }

    checkIfOver();

    player1Turn = !player1Turn;
})

resetBtn.addEventListener('click', () => {
    resetGame();
})

function resetGame() {
    message.textContent = 'Player 1 Turn';
    player1Scoreboard.textContent = 0;
    player2Scoreboard.textContent = 0;
    player1Dice.textContent = '-';
    player2Dice.textContent = '-';
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    resetBtn.style.display = 'none';
    rollBtn.style.display = 'inline';
    doubleBtn.style.display = 'inline';
    player2Dice.classList.remove('active');
    player1Dice.classList.add('active');
}