var answer = 78;

var guess = prompt("Guess the number");

if(guess == answer){
  console.log("You guessed it!")
}
// also, Number(guess) === answer or Number(prompt("Guess the number")); or guess = Number(stringGuess), where stringGuess = prompt("Guess...")

else if(guess < answer){
  console.log("Go higher!");
}

else {
  console.log("Go lower");
}
