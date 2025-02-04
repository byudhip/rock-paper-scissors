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
      buttons.innerHTML = "<p>Wrapping up the game...</p>"; // to disable buttons and smoothes out the transition to gameFinished
      setTimeout(gameFinished, 2000); // added 2 seconds wait so player can see their last round result first
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



const gameFinished = () => {
  buttons.innerHTML = ""; //Empty out the button container to be reused later

  humanScoreText.textContent = "‎ "; //to maintain consistent positioning, otherwise elements will move around/get resized
  computerScoreText.textContent = "‎ ";
  description.textContent = "‎ ";

  headline.textContent = `${
    humanScore > computerScore
      ? "Congrats!" // win
      : humanScore < computerScore
      ? "Too bad!" // lose
      : "GGWP" // draw
  }`;
  roundResultText.textContent = `${humanScore}-${computerScore}, ${
    humanScore > computerScore
      ? "Player" //win
      : humanScore < computerScore
      ? "Computer" //lose
      : "" //draw
  } ${humanScore === computerScore ? "It's a draw!" : "wins the game!"}`; 

  resetButton = document.createElement("button");
  resetButton.textContent = "Reset";
  resetButton.addEventListener("click", resetGame);  // note to self, always add function as a value, not to call them here (in other words, without parentheses)
  buttons.appendChild(resetButton);
};

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
