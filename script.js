// create variable for h1
// create variable for score element in html
// create variable for round result element
// Create humanScore & computerScore, set to 0

// getComputerChoice
// Create variable comChoice, set as Math floor Math random from 1-3
// if 1 return rock, 2 return paper, 3 return scissors

// playRound
// set the parameter as(humanChoice, getComputerChoice())
// if either score is 10, run gameFinished
// if human paper computer rock humanscore+1, set roundresult to you win message
// if human rock computer scissor humanscore+1, set roundresult to you win message
// if human scissor computer paper humanscore+1, set roundresult to you win message
// if computer paper human rock computerscore+1, set roundresult to computer win message
// if computer rock human scissor computerscore+1, set roundresult to computer win message
// if computer scissor human paper computerscore+1, set roundresult to computer win message
// if choice is the same, set roundresult to it's a draw

// gameFinished
// remove the humanscore and computerscorediv
// update roundresult to "#-#, X won the game!"
// remove the 3 buttons, replace with reset button

// resetbutton
// on click, set both score to 0
// return the description div
// return the 3 buttons

const headline = document.querySelector(".headline");
const humanScoreText = document.querySelector(".humanScore");
const computerScoreText = document.querySelector(".computerScore");
const roundResultText = document.querySelector(".round-result");

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3 ) + 1;
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
}   

const playRound = (humanChoice, computerChoice) => {
    if (humanScore === 10 || computerScore === 10) {
        gameFinished();
    } else {
        if ()
    }
}

const gameFinished = () => {

}
