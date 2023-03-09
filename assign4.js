

function playRound(){
  var playerSelection = console.prompt("Choose!").toLowerCase();
  var computerSelection = computerPlay();

  console.log("Computer:" + computerSelection);

  if (playerSelection = "rock") {
    if (computerSelection = "rock") {
      console.log("Nobody wins.");
    } else if (computerSelection = "scissor") {
      console.log("You win. Rock beats Scissor.");
    } else if (computerSelection = "paper") {
      console.log("You lose. Paper beats Rock.")
    } else if (playerSelection = "rock") {
      
    }
  }
};


function computerPlay(){
  const rps = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * rps.length);
  return rps[random];
};