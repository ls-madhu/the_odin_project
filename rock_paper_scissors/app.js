function computerPlay() {
    const options = ['rock', 'paper', 'scissor'];
    let randomItem = options[Math.floor(Math.random() * options.length)];
    return randomItem;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissor' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissor' && computerSelection === 'paper') {
        return 'player';
    } else if (playerSelection === computerSelection) {
        return 'tie';
    } else {
        return 'computer';
    }
}

let playerSelection, computerSelection;

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissor') {
            playerSelection = prompt('Select: "rock" or "paper" or "scissor"') ?? 'NULL';
            playerSelection = playerSelection.toLowerCase().trim();
        }
        console.log(`Your choice - ${playerSelection} | Computer choice - ${computerSelection}`);

        result = playRound(playerSelection, computerSelection);

        if (result === 'player') {
            playerScore++;
        } else if (result === 'computer') {
            computerScore++;
        }
        console.log(`Your score - ${playerScore} | Computer score - ${computerScore}`);

        playerSelection = null;
    }

    if (playerScore > computerScore) {
        console.log('Player wins the game');
    } else if (playerScore === computerScore) {
        console.log('It is a tie');
    } else {
        console.log('Computer wins the game');
    }
}

game();