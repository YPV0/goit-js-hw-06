const formEl = document.querySelector('.login-form');
const submitBtnEl = document.querySelector('button[type="submit"]');
const emailEl = document.querySelector('input[type="email"]');
const passwordEl = document.querySelector('input[type="password"]');
const userDataPE = {};

submitBtnEl.addEventListener('click', event => {
    event.preventDefault();

    if (emailEl.value.trim().length === 0) {
        alert('Введіть свій email');
        return;
    }
    if (passwordEl.value.trim().length === 0) {
        alert('Введіть свій пароль');
        return;
    }
    userDataPE['email'] = emailEl.value;
    userDataPE['password'] = passwordEl.value;
    console.log(userDataPE);
    formEl.reset();
});
