let rps = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  let chance = Math.floor(Math.random() * 3);
  console.log("Computer shows: " + rps[chance]);
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
  console.log("You show: " + playerChoice);
  if (playerChoice == computerSelection) {
    console.log("Draw! Try again.");
    return 0;
  } else if (
    (playerChoice == "Rock" && computerSelection == "Scissors") ||
    (playerChoice == "Paper" && computerSelection == "Rock") ||
    (playerChoice == "Scissors" && computerSelection == "Paper")
  ) {
    console.log(`You win! ${playerChoice} beats ${computerSelection}`);
    return 1;
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerChoice}`);
    return -1;
  }
}

function game(rounds) {
  let points = 0;
  for (let i = 0; i < rounds; i++) {
    let choose = prompt("Rock, Paper or Scissors?");
    let result = oneRound(choose, computerPlay());
    points += result;
  }
}
