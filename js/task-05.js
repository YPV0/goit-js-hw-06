const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', handleInput);

function handleInput(event) {
    outputEl.textContent = event.target.value;
    if (event.target.value === '') {
        outputEl.textContent = 'Anonymous';
    }
}