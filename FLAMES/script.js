const form = document.querySelector("form");
const name = document.querySelector("#name");
const crush = document.querySelector("#crush");
const findRelationBtn = document.querySelector("#findRelation");
const resultDiv = document.querySelector("#result_div");
const resultText = document.querySelector("#result");

form.onsubmit = (e) => {
  e.preventDefault();

  const loveScore = Math.random() * 100;
  resultDiv.style.display = "block";
  resultText.innerHTML = `Your love score is ${Math.floor(loveScore)}%`;

  resultText.innerHTML += `<br> ${flames(name.value, crush.value)}`;

  scrollTo({
    behavior: "smooth",
    top: resultDiv.offsetTop,
  });
};

function flames(name, crush) {
  // convert both names into lower case
  name = name.toLowerCase();
  crush = crush.toLowerCase();

  // remove spaces from both names
  name = name.replace(/\s/g, "");
  crush = crush.replace(/\s/g, "");

  var total_letters = name.length + crush.length;
  console.log("Total Letters:", total_letters);

  var common_letters = findCommonLetters(name, crush);
  console.log("Common Letters:", common_letters);

  var remaining_letters = total_letters - 2 * common_letters;
  console.log("Uncommon Letters:", remaining_letters);

  return flamesFinder(remaining_letters);
}

function flamesFinder(remaining_letters) {
  var flames = [
    "Friends",
    "Lovers",
    "Affectionate",
    "Marriage",
    "Enemies",
    "Siblings",
  ];

  var count = 0;

  while (flames.length > 1) {
    count = (count + remaining_letters - 1) % flames.length;
    console.log("Removed:", flames.splice(count, 1));
  }

  return `You are ${flames[0]}`;
}

function findCommonLetters(name, crush) {
  let commonLetters = 0;

  const nameArray = name.split("").sort();
  const crushArray = crush.split("").sort();

  for (let i = 0; i < nameArray.length; i++) {
    for (let j = 0; j < crushArray.length; j++) {
      if (nameArray[i] === crushArray[j]) {
        commonLetters++;
        nameArray.splice(i, 1);
        crushArray.splice(j, 1);
        i--;
        break;
      }
    }
  }

  return commonLetters;
}

// Utils
function uuid() {
  return "xxyyxx-xxxx-yxxxy-yyyxxxyyy".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Analytics
const analyticsAPI =
  "https://script.google.com/macros/s/AKfycbxHhJS8ooaqmDY9OZ13hH0hCNE-1mnTdJs6iPrOQZhIiqq-Ln5ZQ-TWmrZgplEYHfvoMA/exec";

if (!localStorage.getItem("uuid")) localStorage.setItem("uuid", uuid());

function sendData() {
  var payload = {
    method: "POST",
    body: JSON.stringify({
      id: localStorage.getItem("uuid"),
      name: name.value,
      crush: crush.value,
    }),
  };

  fetch(analyticsAPI, payload).catch((error) => console.error("error", error));
}

form.addEventListener("submit", sendData);
