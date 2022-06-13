// Global variables
let rps = ["Rock", "Paper", "Scissors"];
let wins = 0;
let draws = 0;
let looses = 0;
let buttons = document.querySelectorAll(".btn");
let resultPop = document.querySelector(".gameResult");
let endMsg = document.querySelector("#gameResultMsg");

// Random Weapon for Computer
function computerPlay() {
  let chance = Math.floor(Math.random() * rps.length);
  return rps[chance];
}

// One Round of RPS
function playRound(playerSelection, computerSelection) {
  let result = document.querySelector("#result");
  result.innerHTML = `You show ${playerSelection}, the Computer shows ${computerSelection}<br>`;
  if (playerSelection == computerSelection) {
    result.innerHTML += `Draw!`;
    draws++;
    showCounters();
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    result.innerHTML += `You win! ${playerSelection} beats ${computerSelection}`;
    wins++;
    showCounters();
  } else {
    result.innerHTML += `You lose! ${computerSelection} beats ${playerSelection}`;
    looses++;
    showCounters();
  }
}

// Reset all counters after Game
function resetGame() {
  wins = 0;
  draws = 0;
  looses = 0;
  result.innerHTML = "";
  showCounters();
  resultPop.classList.add("nodis");
  buttons.forEach((btn) => btn.removeAttribute("disabled"));
}

// Live counters view in UI
function showCounters() {
  document.querySelector("#wins").innerHTML = wins;
  document.querySelector("#draws").innerHTML = draws;
  document.querySelector("#looses").innerHTML = looses;
  if (wins === 5) return winLoose("won");
  else if (looses === 5) return winLoose("lost");
}

// Buttons for R-P or S + Run game round
buttons.forEach((btn) =>
  btn.addEventListener("click", () => playRound(btn.innerHTML, computerPlay()))
);

// Reset Game Button in game-ended-screen
let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => resetGame());

// Text in game-ended-screen
function winLoose(gameResult) {
  resultPop.classList.remove("nodis");
  if (gameResult === "won") endMsg.textContent = "You won this game!";
  else endMsg.textContent = "You lost this game!";
  buttons.forEach((btn) => btn.setAttribute("disabled", ""));
}
