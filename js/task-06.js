const inputEl = document.querySelector('#validation-input');

function toggleClasses(element, classToRemove, classToAdd) {
  element.classList.remove(classToRemove);
  element.classList.add(classToAdd);
}

inputEl.addEventListener('blur', () => {
  const isInputValid = inputEl.value.length === Number(inputEl.dataset.length);
  const classToRemove = isInputValid ? 'invalid' : 'valid';
  const classToAdd = isInputValid ? 'valid' : 'invalid';
  toggleClasses(inputEl, classToRemove, classToAdd);
});