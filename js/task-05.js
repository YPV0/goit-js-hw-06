const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');


nameInputEl.addEventListener('input', event => {
   nameOutputEl.textContent = event.target.value;
       if (event.target.value === '') {
   nameOutputEl.textContent = 'Anonymous';
  }});


