var age = prompt("What is your age?");

if(age > 0 && age < 18){
  console.log("Sorry, you are not old enough to enter.");
}

else if(age > 18 && age < 21){
  console.log("You can enter, but cannot drink");
}

else if(age < 0){
  console.log("Invalid age.");
}

else if(age == 21){
  console.log("happy 21st birthday!");
}

else if(Math.sqrt(age) % 1 == 0){
  console.log("your age is a perfect root");
}
// also, age % Math.sqrt(age) === 0

else if((age % 2) == 1){
  console.log("your age is odd");
}

else {
  console.log("Come on in, you can enter.")
}
