COLORS_ARRAY = [
  "blue",
  "cyan",
  "gold",
  "gray",
  "green",
  "magenta",
  "orange",
  "red",
  "yellow",
  "white",
];

function runGame() {
  let guess = "";
  let correct = false;
  const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
  const target = COLORS_ARRAY[targetIndex];
  let numTries = 0;
  console.log(`taget ${target}`);
  do {
    guess = prompt(
      `I am thinking of one of these colors: 
      \n${COLORS_ARRAY.sort().join(", ")}.
      \nWhat color am I thinking of?`
    );
    console.log(guess);
    if (guess === null) {
      alert("Thank you for playing, try again soon!");
      return;
    }
    correct = checkGuess(guess.toLowerCase(), target);
    numTries++;
  } while (!correct);
  alert(`Congratulations, you won! It only took you ${numTries}`);
}

function checkGuess(guess, target) {
  let correct = false;
  guess = guess.toLowerCase();
  if (COLORS_ARRAY.includes(guess)) {
    if (guess < target) {
      alert("Your guess lower in the alphabet, please try again.");
    } else if (guess > target) {
      alert("Your guess is higher in the alphabet, please try again.");
    } else {
      document.body.style.background = guess;
      correct = true;
    }
  } else {
    alert("Your color is not listed, please try again.");
  }
  return correct;
}
