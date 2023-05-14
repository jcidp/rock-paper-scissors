const buttons = document.querySelectorAll("button");

buttons.forEach(btn => btn.addEventListener("click", e => {
    let result = document.querySelector("#result");
    result.textContent = playRound(e.target.textContent, getComputerChoice());
}));

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
    // Clean playerSelection
    let cleanPlayerSelection = playerSelection[0].toUpperCase() +
        playerSelection.slice(1).toLowerCase();
    switch(cleanPlayerSelection) {
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        let playerChoice = prompt("Select either: 'Rock', 'Paper', or 'Scissors'");
        let result = playRound(playerChoice, getComputerChoice());
        if(result.split(" ")[1] === "Lose!") {
            computerScore++;
        } else if (result.split(" ")[1] === "Win!") {
            playerScore++;
        }
        console.log(result);
    }
    let winner = playerScore > computerScore ? "You win! Congratulations!" :
        playerScore < computerScore ? "The computer wins :(" :
        "It's a draw! Wow!";
    console.log(winner);
    return "Play again!";
}