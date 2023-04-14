const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', () => {
  inputEl.value.length === Number(inputEl.dataset.length)
    ? (inputEl.classList.remove('invalid'), inputEl.classList.add('valid'))
    : (inputEl.classList.remove('valid'), inputEl.classList.add('invalid'));
});
