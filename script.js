let rps = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  let chance = Math.floor(Math.random() * 3);
  console.log(rps[chance]);
  return rps[chance];
}

function oneRound(playerSelection, computerSelection) {
  let playerChoice = "";
  let result = "";
  rps.forEach((element) => {
    if (element.toLowerCase() === playerSelection.toLowerCase()) {
      playerChoice = element;
    }
  });
  console.log(playerChoice);
  if (playerChoice == computerSelection) result = "Draw! Try again.";
  else if (
    (playerChoice == "Rock" && computerSelection == "Scissors") ||
    (playerChoice == "Paper" && computerSelection == "Rock") ||
    (playerChoice == "Scissors" && computerSelection == "Paper")
  ) {
    result = `You win! ${playerChoice} beats ${computerSelection}`;
  } else result = `You lose! ${computerSelection} beats ${playerChoice}`;
  console.log(result);
}

let play = oneRound("paper", computerPlay());
