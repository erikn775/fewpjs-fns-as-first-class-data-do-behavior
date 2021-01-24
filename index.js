/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

let input;
let parsed;

function greet(input) {
  input.split(':')
  parseint(input)
  debugger;
}

function displayMessage() {

}