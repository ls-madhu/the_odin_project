let playerSelection, computerSelection;
let round = 0;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const options = ['rock', 'paper', 'scissor'];
    let randomItem = options[Math.floor(Math.random() * options.length)];
    return randomItem;
}

function playRound(e) {
    computerSelection = computerPlay();
    playerSelection = e.target.textContent.toLowerCase();

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

function play(e) {
    let result;
    const resultsDiv = document.querySelector('.results_div');

    if (round < 5) {
        result = playRound(e);
        round++;
    } else {
        if (confirm('Play Again')) {
            round = 0;
            playerScore = 0;
            computerScore = 0;
            resultsDiv.textContent = '';
            return;
        } else {
            return;
        }
    }

    if (result === 'player') {
        playerScore++;
    } else if (result === 'computer') {
        computerScore++;
    }

    resultsDiv.innerHTML += `<div> <p>> Round ${round}:</p>
        <p>Player Choice - ${playerSelection.toUpperCase()} | Computer Choice - ${computerSelection.toUpperCase()}</p>
        <p>Player Score - ${playerScore} | Computer Score - ${computerScore}</p></div>`;

    if (round === 5) {
        if (playerScore > computerScore) {
            resultsDiv.innerHTML += '<p class="final_result"><b>Player wins the game</b></p>';
        } else if (playerScore === computerScore) {
            resultsDiv.innerHTML += '<p class="final_result"><b>It is a tie</b></p>';
        } else {
            resultsDiv.innerHTML += '<p class="final_result"><b>Computer wins the game</b></p>';
        }
    }
}

const buttons = document.querySelectorAll('.choice_container button');
result = buttons.forEach(button => button.addEventListener('click', play));