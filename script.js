let rps = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  let chance = Math.floor(Math.random() * 3);
  return rps[chance];
}

function oneRound(playerSelection, computerSelection) {
  if (rps.toLowerCase() === playerSelection.toLowerCase()) {
  }
  return;
}
