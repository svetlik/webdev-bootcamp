var playerOne = {
  count: 0,
  button: document.querySelector('.reward-player-1'),
  score: document.querySelector('.player-1')
}

var playerTwo = {
  count: 0,
  button: document.querySelector('.reward-player-2'),
  score: document.querySelector('.player-2')
}

var players = [playerOne, playerTwo];
var victoryCountDisplay = document.querySelector('#victory-count');
var victoryCountAdjustment = document.querySelector('.victory-count-adjustment');
var resetButton = document.querySelector('.reset');

var whenClicked = function(player) {
  if (player.count < victoryCount) {
    player.count+=1;
    player.score.innerHTML = player.count;
    check(player, victoryCount);
  };
}

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
    playerOne.button.disabled = true;
    playerTwo.button.disabled = true;
  }
}

victoryCountAdjustment.onchange = function() {
  victoryCount = this.value;
  victoryCountDisplay.innerHTML = victoryCount;
  victoryCountAdjustment.disabled = true;
}

playerOne.score.innerHTML = playerOne.count;
playerTwo.score.innerHTML = playerTwo.count;

playerOne.button.addEventListener('click', function() {
  whenClicked(playerOne);
})

playerTwo.button.addEventListener('click', function() {
  whenClicked(playerTwo);
})

resetButton.addEventListener('click', function() {
  playerOne.button.disabled = false;
  playerTwo.button.disabled = false;
  victoryCountAdjustment.disabled = false;
  victoryCountAdjustment.value = '';
  victoryCountDisplay.innerHTML = '_';
  victoryCount = 0;
  reset();
})
