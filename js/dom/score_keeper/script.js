var playerOne = {
  count: 0,
  button: document.querySelectorAll('button')[0],
  score: document.querySelector('.player-1')
}

var playerTwo = {
  count: 0,
  button: document.querySelectorAll('button')[1],
  score: document.querySelector('.player-2')
}

var players = [playerOne, playerTwo];

var victoryCount = 3;
var victoryCountDisplay = document.querySelector('.victory-count');
var resetButton = document.querySelectorAll('button')[2];

playerOne.score.innerHTML = playerOne.count;

playerTwo.score.innerHTML = playerTwo.count;

victoryCountDisplay.innerHTML = victoryCount;

playerOne.button.addEventListener('click', function() {
  if (playerOne.count < victoryCount) {
    playerOne.count+=1;
    playerOne.score.innerHTML = playerOne.count;
    check(playerOne, victoryCount);
  };
})

playerTwo.button.addEventListener('click', function() {
  if (playerTwo.count < victoryCount) {
    playerTwo.count+=1;
    playerTwo.score.innerHTML = playerTwo.count;
    check(playerTwo, victoryCount);
  };
})

var reset = function() {
  players.forEach(function(player) {
    player.count = 0;
    player.score.innerHTML = '0';
    player.score.classList.remove('victory');
  })
}

var check = function(player, victoryCount) {
  if (player.count == victoryCount) {
    player.score.classList.add('victory');
  }
}

resetButton.addEventListener('click', function() {
  reset();
})
