const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button'); //select all the buttons

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  // console.log(userChoice);
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  // console.log(randomNumber);
  if(randomNumber === 1) {
    computerChoice = 'rock';
  }
  if(randomNumber === 2) {
    computerChoice = 'paper';
  }
  if(randomNumber === 3) {
    computerChoice = 'scissor';
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult () {
   if(computerChoice === userChoice) {
      result = "its a tie!";
   }

   if(computerChoice === 'rock' && userChoice === 'paper') {
     result = 'You win!';
   }

   if(computerChoice === 'rock' && userChoice === 'scissor') {
     result = 'You lose!';
   }

   if(computerChoice === 'paper' && userChoice === 'scissor') {
    result = 'You win!';
   }

   if(computerChoice === 'paper' && userChoice === 'rock') {
    result = 'You lose!';
   }

   if(computerChoice === 'scissor' && userChoice === 'paper') {
    result = 'You lose!';
   }

   if(computerChoice === 'scissor' && userChoice === 'rock') {
    result = 'You win!';
   }

   resultDisplay.innerHTML = result;
 
}