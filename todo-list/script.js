const trashIcon =
  '<svg height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';

function uuid() {
  return "xyx-xxx-yyxxy".replace(/[xy]/g, (c) => {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function createNotesElement(msg) {
  const li = document.createElement("li");
  const randomUuid = uuid();

  li.innerHTML = `<input type="checkbox" id="${randomUuid}" />
  <label for="${randomUuid}">${msg}</label>
  <div class="close" onclick="deleteNote('${randomUuid}')">${trashIcon}</div>`;

  return li;
}

function deleteNote(uuid) {
  document.getElementById(uuid).parentElement.remove();
}

const form = document.getElementById("form");
const notes = document.getElementById("notes");
const submitBtn = document.getElementById("btn");
const list = document.getElementById("notesList");

form.onsubmit = (e) => {
  e.preventDefault();
  if (notes.value.trim() != "") {
    list.prepend(createNotesElement(notes.value));
    notes.value = "";
  }
};

notes.value =
  "You can do the following operations:<br><ul><li>Add (supports HTML)</li><li>Delete</li><li>Check</li><li>Complete</li></ul>";
submitBtn.click();

notes.value = "Here you can organize your work <b>easiy</b>.";
submitBtn.click();

notes.value = "This is my note making app.";
submitBtn.click();

notes.value = "This is a sample note.";
submitBtn.click();
