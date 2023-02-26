'use strict'

const inputField = document.querySelector('.input-field');
const submitButton = document.querySelector('.submit-button');
const message = document.querySelector('.message');
let myMessage = ''

submitButton.addEventListener('click', ()=> {
  myMessage = inputField.textContent.value;
  message.innerHTML = myMessage;
})

document.addEventListener('keyup', (e)=> {
  if (e.code === "Enter") {
    e.preventDefault();
    submitButton.click();
  }
})