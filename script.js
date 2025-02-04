// create variable for h1
// create variable for description
// create variable for score elements in html
// create variable for round result element
// create variable for buttons
// declare reset button
// Create humanScore & computerScore variables, set to 0

// getComputerChoice
// Create variable comChoice, set as Math floor Math random from 1-3
// if 1 return rock, 2 return paper, 3 return scissors

// playRound
// set humanChoice as the parameter
// end the game after three rounds
// if human paper computer rock humanscore+1, set roundresult to you win message
// if human rock computer scissor humanscore+1, set roundresult to you win message
// if human scissor computer paper humanscore+1, set roundresult to you win message
// if computer paper human rock computerscore+1, set roundresult to computer win message
// if computer rock human scissor computerscore+1, set roundresult to computer win message
// if computer scissor human paper computerscore+1, set roundresult to computer win message
// if choice is the same, set roundresult to it's a draw

const headline = document.querySelector(".headline");
const description = document.querySelector(".description");
const humanScoreText = document.querySelector(".humanScore");
const computerScoreText = document.querySelector(".computerScore");
const roundResultText = document.querySelector(".round-result");
const buttons = document.querySelector(".buttons");
let resetButton;

let roundCount = 0;
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  switch (computerChoice) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    default:
      return "scissors";
      break;
  }
};

const playRound = (humanChoice) => {
  const computerChoice = getComputerChoice();
  if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundCount++;
    humanScoreText.textContent = `Player: ${humanScore}`;
    roundResultText.textContent = `You chose ${humanChoice} & computer chose ${computerChoice}, you win!`;
    if (roundCount === 3) {
      buttons.innerHTML = "<p>Wrapping up the game...</p>";
      setTimeout(gameFinished, 2000);
      return;
    }
  } else if (
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    roundCount++;
    computerScoreText.textContent = `Computer: ${computerScore}`;
    roundResultText.textContent = `You chose ${humanChoice} & computer chose ${computerChoice}, you lose!`;
    if (roundCount === 3) {
      buttons.innerHTML = "<p>Wrapping up the game...</p>";
      setTimeout(gameFinished, 2000);
      return;
    }
  } else {
    roundCount++;
    roundResultText.textContent = `You chose ${humanChoice} & computer chose ${computerChoice}, it's a draw!`;
    if (roundCount === 3) {
      buttons.innerHTML = "<p>Wrapping up the game...</p>";
      setTimeout(gameFinished, 2000);
      return;
    }
  }
};

// gameFinished
// remove the play buttons
// set the humanscore, computerscore, and description to an invisible character to maintain positioning
// update headline based on winner, if any
// update round-result based on winner, if any

// resetbutton
// set text to Reset
// run resetGame onclick
// append resetButton to .buttons

const gameFinished = () => {
  buttons.innerHTML = "";

  humanScoreText.textContent = "‎ ";
  computerScoreText.textContent = "‎ ";
  description.textContent = "‎ ";

  headline.textContent = `${
    humanScore > computerScore
      ? "Congrats!"
      : humanScore < computerScore
      ? "Too bad!"
      : "GGWP"
  }`;
  roundResultText.textContent = `${humanScore}-${computerScore}, ${
    humanScore > computerScore
      ? "Player"
      : humanScore < computerScore
      ? "Computer"
      : ""
  } ${humanScore === computerScore ? "It's a draw!" : "wins the game!"}`;

  resetButton = document.createElement("button");
  resetButton.textContent = "Reset";
  resetButton.addEventListener("click", resetGame); // Make sure this triggers resetGame
  buttons.appendChild(resetButton);
};

// resetGame
// reset scores to 0
// reset round count to 0
// restore original headline
// restore original description
// restore original score text
// restore original round-result text
// restore play buttons

const resetGame = () => {
  humanScore = 0;
  computerScore = 0;
  roundCount = 0;
  headline.textContent = "Welcome";
  description.textContent =
    "Let's play 3 rounds of rock-paper-scissors! Click any of the buttons to start.";
  humanScoreText.textContent = "Player: 0";
  computerScoreText.textContent = "Computer: 0";
  roundResultText.textContent = "...Waiting for input...";
  buttons.innerHTML = `
        <button onclick="playRound('rock')">Rock</button>
        <button onclick="playRound('paper')">Paper</button>
        <button onclick="playRound('scissors')">Scissors</button>`;
};
