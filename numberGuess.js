let secretNumber = 5;

let guess = prompt("Guess a number between 1 and 10:");


guess = parseInt(guess);


while (guess !== secretNumber) {
  if (guess < secretNumber) {
    console.log("Too low!");
  } else {
    console.log("Too high!");
  }
  guess = prompt("Guess a number between 1 and 10:");
  guess = parseInt(guess);
}

console.log("Correct!");