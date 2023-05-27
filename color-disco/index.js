const flipBtn = document.getElementById("flip-btn");
let flipCount = 0;

function getRandomColors() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function shiftColors() {
  colors.push(colors.shift());
}

flipBtn.addEventListener("click", () => {
  const color = getRandomColors();
  document.body.style.backgroundColor = color;
  document.getElementById("color").textContent = color;

  shiftColors();
});



