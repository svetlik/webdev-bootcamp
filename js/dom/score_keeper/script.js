var playerOneCount = 0;
var playerTwoCount = 0;
var victoryCount = 3;
var playerOneScore = document.querySelector('.player-1');
var playerTwoScore = document.querySelector('.player-2');
var victoryCountDisplay = document.querySelector('.victory-count');
var playerOneButton = document.querySelectorAll('button')[0];
var playerTwoButton = document.querySelectorAll('button')[1];
var resetButton = document.querySelectorAll('button')[2];

playerOneScore.innerHTML = playerOneCount;

playerTwoScore.innerHTML = playerTwoCount;

victoryCountDisplay.innerHTML = victoryCount;

playerOneButton.addEventListener('click', function() {
  if (playerOneCount < victoryCount) {
    playerOneCount+=1;
    playerOneScore.innerHTML = playerOneCount;
    check(playerOneCount, victoryCount);
  };
})

playerTwoButton.addEventListener('click', function() {
  if (playerTwoCount < victoryCount) {
    playerTwoCount+=1;
    playerTwoScore.innerHTML = playerTwoCount;
    check(playerTwoCount, victoryCount);
  };
})
var reset = function() {
  playerOneCount = 0;
  playerTwoCount = 0;
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneScore.classList.remove('victory');
}

var check = function(playerCount, victoryCount) {
  if (playerCount == victoryCount) {
    playerOneScore.classList.add('victory');
    reset();
  }
}

resetButton.addEventListener('click', function() {
  reset();
})
