// Selecting Elements
const $ = (e) => document.querySelector(e);

// Elements
const form = $(".form");
const input = $(".input");

// Event Handlers
input.onkeydown = function (e) {
  console.log(e.key, e.keyCode);

  if (
    e.key == "Enter" ||
    e.key == "Backspace" ||
    e.key == "ArrowRight" ||
    e.key == "ArrowLeft"
  ) {
    console.log(e.key);
  }

  // Catching Symbols
  else if (
    (input.value != 0 && e.key == "+") ||
    e.key == "-" ||
    e.key == "*" ||
    e.key == "/" ||
    e.key == "%" ||
    e.key == "^" ||
    e.key == "(" ||
    e.key == ")"
  ) {
    if (!input.value.endsWith(" ")) {
      input.value += " ";
    }
  }

  // Catching numbers
  else if (!e.shiftKey && 48 <= e.keyCode && e.keyCode <= 57) {
    console.log("number:", e.keyCode - 48);

    if (isNaN(+input.value[input.value.length - 1])) {
      input.value += " ";
    }

    if (input.value == '0')
      input.value = "";
  } else {
    e.preventDefault();
  }
  
};

input.onkeyup = function (e) {
  input.value = input.value
  .split(" ")
  .filter((e) => e != "")
  .join(" ");

  if (input.value == "") input.value = 0;
};

form.onsubmit = function (e) {
  e.preventDefault();

  console.log(input.value);
  input.value = eval(input.value.replace("^", "**"));
};
