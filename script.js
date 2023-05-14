const buttons = document.querySelectorAll(".choice");
const playerScoreText = document.querySelector("#player_score");
const computerScoreText = document.querySelector("#computer_score");
const computerChoiceText = document.querySelector("#computer_choice");
const resultText = document.querySelector("#result");
const winnerText = document.querySelector("#winner");
const reset = document.querySelector("#reset");
let playerScore = 0;
let computerScore = 0;


buttons.forEach(btn => btn.addEventListener("click", e => {
    let computerChoice = getComputerChoice();
    computerChoiceText.textContent = computerChoice;
    let result = playRound(e.target.textContent, computerChoice);
    resultText.textContent = result;
    if(result.split(" ")[1] === "Lose!") {
        computerScore++;
        computerScoreText.textContent = computerScore;
    } else if (result.split(" ")[1] === "Win!") {
        playerScore++;
        playerScoreText.textContent = playerScore;
    }
    if (computerScore === 5 || playerScore === 5) {
        let winner = playerScore > computerScore ? "You win! Congratulations!" :
            playerScore < computerScore ? "The computer wins :(" :
            "It's a draw! Wow!";
        winnerText.textContent = winner;
        // TODO: Add a reset button with an eventListener to a function that resets the game
        reset.style.visibility = "visible";
        buttons.forEach(btn => btn.disabled = true);
    }
    return "Play again!";
}));

reset.addEventListener("click", resetGame);

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "Rock":
            switch(computerSelection) {
                case "Rock":
                    return "You Draw! Rock equals Rock";
                case "Paper":
                    return "You Lose! Paper beats Rock";
                case "Scissors":
                    return "You Win! Rock beats Scissors";
            }
        case "Paper":
            switch(computerSelection) {
                case "Rock":
                    return "You Win! Paper beats Rock";
                case "Paper":
                    return "You Draw! Paper equals Paper";
                case "Scissors":
                    return "You Lose! Scissors beat Paper";
            }
        case "Scissors":
            switch(computerSelection) {
                case "Rock":
                    return "You Lose! Rock beats Scissors";
                case "Paper":
                    return "You Win! Scissors beat Paper";
                case "Scissors":
                    return "You Draw! Scissors equal Scissors";
            }
    } 
    return "Invalid input. Please select 'Rock', 'Paper', or 'Scissors'."
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = 0;
    computerScoreText.textContent = 0;
    computerChoiceText.textContent = "";
    resultText.textContent = "";
    winnerText.textContent = "";
    reset.style.visibility = "hidden";
    buttons.forEach(btn => btn.disabled = false);
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerScoreText = document.querySelector("#player_score");
    let computerScoreText = document.querySelector("#computer_score");
    while (playerScore < 5 && computerScore < 5) {
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        let playerChoice = prompt("Select either: 'Rock', 'Paper', or 'Scissors'");
        let result = playRound(playerChoice, getComputerChoice());
        if(result.split(" ")[1] === "Lose!") {
            computerScore++;
        } else if (result.split(" ")[1] === "Win!") {
            playerScore++;
        }
        let resultText = document.querySelector("#result");
        resultText.textContent = result;
    }
    let winner = playerScore > computerScore ? "You win! Congratulations!" :
        playerScore < computerScore ? "The computer wins :(" :
        "It's a draw! Wow!";
    let winnerText = document.querySelector("#winner");
    winnerText.textContent = winner;
    return "Play again!";
}