const score = { wins: 0, losses: 0, ties: 0 };
const choices = ["Rock", "Scissors", "Paper"];
const winConditions = {
    "Rock": "Scissors",
    "Scissors": "Paper",
    "Paper": "Rock"
};

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice === computerChoice) {
        score.ties++;
        redraw(computerChoice, userChoice, "Ties");
    } else if (winConditions[userChoice] === computerChoice) {
        score.wins++;
        redraw(computerChoice, userChoice, "You win");
    } else {
        score.losses++;
        redraw(computerChoice, userChoice, "Computer win");
    }
}

const redraw = (computerChoice, userChoice, resultText) => {
    displayResult(resultText);
    displayChoices(userChoice, computerChoice);
    displayScore(score);
}

function displayChoices(userChoice, computerChoice) {
    document.getElementById('user-choice').innerHTML = "Your choise:" + userChoice;
    document.getElementById('computer-choice').innerHTML = "Computer choise:" + computerChoice;
}

function displayResult(resultText) {
    document.getElementById('result').innerHTML = "Result: " + resultText;
}

function displayScore(score) {
    document.getElementById('score').innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Tiess: ${score.ties}`;
}