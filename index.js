function getUserChoice() {
    const choices = document.getElementsByName("choice");

    for (let i = 0; i < choices.length; i++) {
      if (choices[i].checked) {
        return choices[i].value;
      }
    }
  }

function getComputerChoice() {
    let computerChoices = Math.floor(Math.random() * 3);
    switch (computerChoices) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
  }
  return computerChoices;
}
  
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It was a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You won!";
    } else {
      return "I won!";
    }
}
 
  function playGame() {
    const userChoice = getUserChoice();

    if (!userChoice) {
    return document.getElementById("result").innerHTML = "Please select a choice."; 
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    document.getElementById("result").innerHTML =
      "You chose " + userChoice + ". I chose " + computerChoice + ". " + result;
  }
  