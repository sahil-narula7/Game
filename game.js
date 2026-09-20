
function getComputerChoice () {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function humanChoice () {
    const choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return humanChoice();
    }
}

function playRound (humanChoice, getComputerChoice) {
    const computerChoice = getComputerChoice();
    const humanChoiceValue = humanChoice();
    if (humanChoiceValue === computerChoice) {
         alert(`You chose ${humanChoiceValue}. Computer chose ${computerChoice}. It's a tie!`);
         return "tie";
    } else if (
        (humanChoiceValue === "rock" && computerChoice === "scissors") ||
        (humanChoiceValue === "paper" && computerChoice === "rock") ||
        (humanChoiceValue === "scissors" && computerChoice === "paper")
    ) {
        alert(`You chose ${humanChoiceValue}. Computer chose ${computerChoice}. You win!`);
        return "win";
    } else {
        alert(`You chose ${humanChoiceValue}. Computer chose ${computerChoice}. You lose!`);    
        return "lose";
    }
}

function game () {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const result = playRound(humanChoice, getComputerChoice);
        result === "win" ? humanScore++ : result === "lose" ? computerScore++ : null;    
    }
    alert(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}

game();

