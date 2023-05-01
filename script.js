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
    console.log(cleanPlayerSelection);
    switch(cleanPlayerSelection) {
        case "Rock":
            switch(computerSelection) {
                case "Rock":
                    return "Draw! Rock equals Rock";
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
                    return "Draw! Paper equals Paper";
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
                    return "Draw! Scissors equal Scissors";
            }
    } 
    return "Invalid input. Please select 'Rock', 'Paper', or 'Scissors'."
}
