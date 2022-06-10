let rps = ["Rock", "Paper", "Scissors"];
let wins = 0;
document.querySelector("#wins").innerHTML = `Games won: ${wins}`;
let draws = 0;
document.querySelector("#draws").innerHTML = `Draw Games: ${draws}`;
let looses = 0;
document.querySelector("#looses").innerHTML = `Games lost: ${looses}`;

function computerPlay() {
  let chance = Math.floor(Math.random() * 3);
  return rps[chance];
}

function playRound(playerSelection, computerSelection) {
  let result = document.querySelector("#result");
  result.innerHTML = `You show ${playerSelection}, the Computer shows ${computerSelection}<br>`;
  if (playerSelection == computerSelection) {
    result.innerHTML += `Draw!`;
    return;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    result.innerHTML += `You win! ${playerSelection} beats ${computerSelection}`;
    return wins++;
  } else {
    result.innerHTML += `You lose! ${computerSelection} beats ${playerSelection}`;
    return looses++;
  }
}

let buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) =>
  btn.addEventListener("click", () => playRound(btn.innerHTML, computerPlay()))
);
