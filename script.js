let rps = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  let chance = Math.floor(Math.random() * 3);
  return rps[chance];
}

function oneRound(playerSelection, computerSelection) {
  rps.forEach((element) => {
    if (element.toLowerCase() === playerSelection.toLowerCase()) {
      console.log(element);
    }
  });
}

let play = oneRound("paper", computerPlay());
