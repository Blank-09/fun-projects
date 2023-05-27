const flipBtn = document.getElementById("flip-btn");

function getRandomColors() {
  let hexColor = "#";
  const hexValues = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    hexColor += hexValues[Math.floor(Math.random() * hexValues.length)];
  }
  return hexColor;
}

flipBtn.addEventListener("click", () => {
  const color = getRandomColors();
  document.body.style.backgroundColor = color;
  document.getElementById("color").textContent = color;
});



