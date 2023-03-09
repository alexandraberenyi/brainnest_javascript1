game();

function game(){

  var computerPoints = 0;
  var playerPoints = 0;

  for (let i = 0; i<5; i++){
    var roundPoint = playRound();
    if(roundPoint == -1) {
      computerPoints ++;
    } else if (roundPoint == 1) {
      playerPoints ++;
    };
  };

  if (playerPoints > computerPoints) {
    console.log("You won! " + playerPoints + "/" + computerPoints);
    alert("You won!")
  } else if (playerPoints < computerPoints) {
    console.log("You lost! " + playerPoints + "/" + computerPoints);
    alert("You lost!")
  } else {
    console.log("It's even.")
  };
};

function playRound(){
  var playerSelection = prompt("Choose!").toLowerCase();
  var computerSelection = computerPlay();

  var points = 0;

  console.log("Computer:" + computerSelection);

  if (playerSelection == "rock") {
    if (computerSelection =="rock") {
      console.log("Nobody wins.");
    } else if (computerSelection == "scissor") {
      console.log("You win. Rock beats Scissor.");
      points ++;
    } else if (computerSelection == "paper") {
      console.log("You lose. Paper beats Rock.");
      points --;
    };      
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      console.log("You win. Paper beats Rock.");
      points ++;
    } else if (computerSelection == "scissor") {
      console.log("You lose. Scissor beats Paper.");
      points --;
    } else if (computerSelection == "paper") {
      console.log("Nobody wins.");
    };
  } else if (playerSelection == "scissor") {
    if (computerSelection == "rock") {
      console.log("You lose. Rock beats Scissor.");
      points --;
    } else if (computerSelection == "scissor") {
      console.log("Nobody wins.");
    } else if (computerSelection == "paper") {
      console.log("You win. Scissor beats Paper.");
      points ++;
    };
  } else {
    console.log("You messed up the spelling. This round were lost.");
  };

  return points;
};


function computerPlay(){
  const rps = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * rps.length);
  return rps[random];
};