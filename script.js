const headline = document.querySelector(".headline");
const description = document.querySelector(".description");
const lastMsg = document.querySelector(".after-third");
const humanScoreText = document.querySelector(".human-score");
const computerScoreText = document.querySelector(".computer-score");
const roundResultText = document.querySelector(".round-result");
const buttons = document.querySelector(".buttons");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let resetButton;

// let roundCount = 0; unused
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
  const humanChoiceEmoji =
    humanChoice === "rock" ? "🗿" : humanChoice === "paper" ? "📜" : "✂️";
  const computerChoice = getComputerChoice();
  const computerChoiceEmoji =
    computerChoice === "rock" ? "🗿" : computerChoice === "paper" ? "📜" : "✂️";
  if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    // roundCount++;
    humanScoreText.textContent = `Player: ${humanScore}`;
    roundResultText.textContent = `You chose ${humanChoiceEmoji} & computer chose ${computerChoiceEmoji}, you win!`;
    if (humanScore === 5 || computerScore === 5) {
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
    // roundCount++;
    computerScoreText.textContent = `Computer: ${computerScore}`;
    roundResultText.textContent = `You chose ${humanChoiceEmoji} & computer chose ${computerChoiceEmoji}, you lose!`;
    if (humanScore === 5 || computerScore === 5) {
      buttons.innerHTML = "<p>Wrapping up the game...</p>"; // to disable buttons and smoothes out the transition to gameFinished
      setTimeout(gameFinished, 2000); // added 2 seconds wait so player can see their last round result first
      return;
    }
  }  else {
    //  roundCount++;
     roundResultText.textContent = `You chose ${humanChoiceEmoji} & computer chose ${computerChoiceEmoji}, it's a draw!`;
    //  if (roundCount === 3) {
    //    buttons.innerHTML = "<p>Wrapping up the game...</p>";
    //    setTimeout(gameFinished, 2000);
    //    return;
    //  }
   }
};

buttons.addEventListener("click", (event) => {
  if (event.target.classList.contains("rock")) {
    playRound("rock");
  } else if (event.target.classList.contains("paper")) {
    playRound("paper");
  } else if (event.target.classList.contains("scissors")) {
    playRound("scissors");
  }
});

const gameFinished = () => {
  buttons.innerHTML = ""; // Empty out the buttons container to be reused later

  lastMsg.textContent = `${humanScore}-${computerScore}, ${
    humanScore > computerScore ? "Player" : "Computer"
    // : humanScore < computerScore
    // ? "Computer"
    // : ""
  } wins the game!`;

  humanScoreText.textContent = "‎‎‎‎"; // Used invisible character to maintain consistent positioning, otherwise elements will move around/get resized
  computerScoreText.textContent = "‎‎‎‎";
  description.textContent = "‎‎‎‎";

  headline.textContent = `${
    humanScore > computerScore ? "Congrats!" : "Too bad!"
    // : humanScore < computerScore
    // : "GGWP"
  }`;
  roundResultText.textContent = "‎‎‎‎ ";

  resetButton = document.createElement("button");
  resetButton.textContent = "🗘";
  resetButton.addEventListener("click", resetGame);
  buttons.appendChild(resetButton);
};

const resetGame = () => {
  humanScore = 0;
  computerScore = 0;
  // roundCount = 0;

  headline.textContent = "Let's play 🗿 📜 ✂️";
  description.textContent =
    "First to reach score of 5 wins! Click any of the buttons to start.";
  humanScoreText.textContent = "Player: 0";
  computerScoreText.textContent = "Computer: 0";
  lastMsg.textContent = "";
  roundResultText.textContent = "...Waiting for input...";

  buttons.innerHTML = `
        <button class="rock emoji">🗿</button>
        <button class="paper emoji">📜</button>
        <button class="scissors emoji">✂️</button>`;
};
