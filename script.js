var roundsUserAsked = prompt("How many rounds do you want to play?", "3");
var roundsSet = parseInt(roundsUserAsked);
console.log(roundsSet);

function startGame() {
  computer = Math.floor(Math.random() * 3);

  var userChoice = prompt("Choose Rock (0), Paper (1), or Scissors (2)", "2");
  var rpsSelection = parseInt(userChoice);
  console.log(userChoice);

  if (computer == 0 && rpsSelection == 1) {
    alert("You win! Paper covers rock.");
  } else if ((computer = 0 && rpsSelection == 2)) {
    alert("Computer wins! Used rock.");
  } else if ((computer = 1 && rpsSelection == 0)) {
    alert("Computer wins! Used paper.");
  } else if ((computer = 1 && rpsSelection == 2)) {
    alert("You win! Scissor cuts paper.");
  } else if ((computer = 2 && rpsSelection == 0)) {
    alert("You win! Rock breaks scissor.");
  } else if ((computer = 2 && rpsSelection == 1)) {
    alert("Computer wins! Used scissor.");
  } else {
    alert("Tie!");
  }
}
