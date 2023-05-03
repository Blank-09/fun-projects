// Selector function
const $ = (e) => document.querySelector(e)

// Elements
const form = $('form')
const input = $('#input')
const output = $('#output')

// Event Handlers
form.onsubmit = function (e) {
  e.preventDefault()

  try {
    output.innerText = eval(input.value.replace('^', '**'))
  }

  catch (err) {
    output.innerText = "Invalid Input";
  }
}
