function uuid() {
  return "xxyyxx-xxxx-yxxxy-yyyxxxyyy".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

if (!localStorage.getItem("uuid")) localStorage.setItem("uuid", uuid());

const script = document.querySelector("script#analytics");
const link = script?.src;

function sendData() {
  fetch(link || api, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      uuid: localStorage.getItem("uuid"),
      name: name.value,
      crush: crush.value,
    }),
  });
}

form.addEventListener("submit", sendData);
