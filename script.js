'use strict'

const inputField = document.getElementById('input-field');
const submitButton = document.querySelector('.submit-button');
const message = document.querySelector('.message'); 

const updateMsg = function() {
  message.textContent = inputField.value;
  inputField.value = '';
};


submitButton.addEventListener('click', ()=> { 
  setTimeout(updateMsg, 1000);
})

document.addEventListener('keyup', (e)=> {
  if (e.code === "Enter") {
    submitButton.click()
  }
})