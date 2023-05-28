const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const milliseconds = document.getElementById('milliseconds');

// Control Buttons
const playPauseBtn = document.getElementById('play-pause');
const resetBtn = document.getElementById('reset');

// Event Listeners
playPauseBtn.addEventListener('click', playPauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Other Variables
let interval;
let minutesValue = 0;
let secondsValue = 0;
let millisecondsValue = 0;

// Functions
function playPauseTimer() {
  if (!interval) {
    interval = setInterval(startTimer, 10);
    changeIcon('pause-outline');
  } else {
    clearInterval(interval);
    interval = null;
    changeIcon('play-outline');
  }
}

function changeIcon(icon) {
  playPauseBtn.querySelector('ion-icon').name = icon;
}

function resetTimer() {
  clearInterval(interval);
  interval = null;

  minutesValue = 0;
  secondsValue = 0;
  millisecondsValue = 0;

  minutes.textContent = '00';
  seconds.textContent = '00';
  milliseconds.textContent = '00';

  changeIcon('play-outline');
}

function startTimer() {
  millisecondsValue += 10;

  if (millisecondsValue === 1000) {
    millisecondsValue = 0;
    secondsValue++;
  }

  if (secondsValue === 60) {
    secondsValue = 0;
    minutesValue++;
  }

  updateTimer();
}

function stopTimer() {
  clearInterval(interval);
}

function padWithZero(num) {
  return num.toString().padStart(2, '0');
}

function updateTimer() {
  milliseconds.textContent = padWithZero(millisecondsValue / 10);
  seconds.textContent = padWithZero(secondsValue);
  minutes.textContent = padWithZero(minutesValue);
}
