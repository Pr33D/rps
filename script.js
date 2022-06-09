let rps = ["Rock", "Paper", "Scissors"];
let wins = 0;
let looses = 0;

function computerPlay() {
  let chance = Math.floor(Math.random() * 3);
  console.log("Computer shows: " + rps[chance]);
  return rps[chance];
}

function oneRound(playerSelection, computerSelection) {
  let playerChoice = "";
  rps.forEach((element) => {
    if (element.toLowerCase() === playerSelection.toLowerCase()) {
      playerChoice = element;
    }
  });
  console.log("You show: " + playerChoice);
  if (playerChoice == computerSelection) {
    console.log("Draw! Try again.");
    return;
  } else if (
    (playerChoice == "Rock" && computerSelection == "Scissors") ||
    (playerChoice == "Paper" && computerSelection == "Rock") ||
    (playerChoice == "Scissors" && computerSelection == "Paper")
  ) {
    console.log(`You win! ${playerChoice} beats ${computerSelection}`);
    return wins++;
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerChoice}`);
    return looses++;
  }
}

function game(rounds) {
  for (let i = 0; i < rounds; i++) {
    let choose = prompt("Rock, Paper or Scissors?");
    let result = oneRound(choose, computerPlay());
    console.log(wins + "won & " + looses + "lost");
  }
  if (wins > looses) {
    console.log("You won the hole game!");
  } else if (looses > wins) {
    console.log("You lost this game!");
  } else {
    console.log("Draw - Try again :)");
  }
}

let howManyRounds = prompt("How many Rounds?");
let playGame = game(howManyRounds);
