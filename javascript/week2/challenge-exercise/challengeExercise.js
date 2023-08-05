function runGame() {
  const targetNum = Math.floor(Math.random() * 100) + 1;
  let correct = false;
  let numTries = 0;
  let guessNumber = 0;
  let guessString = "";
  do {
    guessString = prompt(
      "I am thinking of a number from 1 to 100, what is it?"
    );
    guessNumber = Number(guessString);
    numTries++;
    correct = checkGuess(guessNumber, targetNum);
    alert(guessNumber);
  } while (!correct);
  alert("You guessed correctly!");
}

function checkGuess(guessNumber, targetNum) {
  let correct = false;
  if (isNaN(guessNumber)) {
    alert("Please enter a number between 1 - 100");
  } else if (guessNumber < 1 || guessNumber > 100) {
    alert(
      "Your number is outside of the range, please guess a number between 1 and 100"
    );
  } else if (guessNumber > targetNum) {
    alert("Your number is greater than the number");
  } else if (guessNumber < targetNum) {
    alert("Your number is less than the number");
  } else {
    correct = true;
  }
  return correct;
}
