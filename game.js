
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

const div_style = document.createElement('div');
const div_winner = document.createElement('div');
const div_score = document.createElement('div');

const button_rock = document.createElement('button');
const button_paper = document.createElement('button');
const button_scissors = document.createElement('button');
const btn_reset = document.createElement('button');

btn_reset.textContent = "Reset Game";
button_rock.textContent = "Rock";
button_paper.textContent = "Paper";
button_scissors.textContent = "Scissors";

let humanScore = 0;
let computerScore = 0;
let round = 0;

btn_reset.addEventListener("click", function () {
    humanScore = 0;
    computerScore = 0;
    round = 0;
    div_score.textContent = `Round: 0 | Human: 0 |  Computer: 0`;
    div_winner.textContent = "";
});

function playGame (humanChoice){
    if (round >= 5) return;
    const result = playRound(() => humanChoice, getComputerChoice);
    round++; // Increment round count
    if (result === "win") {
        humanScore++;
    } else if (result === "lose") {
        computerScore++;
    }
    div_score.textContent = `Round: ${round} | Human: ${humanScore} | Computer: ${computerScore}`;
    div_winner.textContent = result;
    if (round === 5) {
        if (humanScore > computerScore) {
            div_winner.textContent = "Game Over! You win the game!";
        } else if (humanScore < computerScore) {
            div_winner.textContent = "Game Over! Computer wins the game!";
        } else {
            div_winner.textContent = "Game Over! It's a tie!";
        }
    }
};
button_rock.addEventListener("click", function () {
    playGame("rock");
});

button_paper.addEventListener("click", function () {
    playGame("paper");
});

button_scissors.addEventListener("click", function () {
    playGame("scissors");
});

button_rock.style.margin = "10px";
button_paper.style.margin = "10px";
button_scissors.style.margin = "10px";

div_style.style.display = "flex";
div_style.style.flexDirection = "row";
div_style.style.justifyContent = "center";
div_style.style.alignItems = "center";
div_style.style.flexWrap = "wrap";

div_style.appendChild(button_rock);
div_style.appendChild(button_paper);
div_style.appendChild(button_scissors);
div_style.appendChild(btn_reset);

div_winner.style.textAlign = "center";
div_score.style.textAlign = "center";
div_score.style.marginTop = "10px";

btn_reset.style.backgroundColor = "lightgray";
btn_reset.style.border = "1px solid #ccc";
btn_reset.style.cursor = "pointer";

document.body.appendChild(div_style);
document.body.appendChild(div_winner);
document.body.appendChild(div_score);