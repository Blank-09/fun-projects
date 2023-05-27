const counter  = document.getElementById('counter');
const addBtn   = document.getElementById('add');
const subBtn   = document.getElementById('sub');
const resetBtn = document.getElementById('reset');

let count = 0;

function padZero(num) {
  return (0 <= num && num < 10) ? '0' + num : num;
}

function updateCounter() {
  counter.innerText = padZero(count);
}

addBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});

subBtn.addEventListener('click', () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
});