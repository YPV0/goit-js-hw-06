    document.querySelector('#name-input').addEventListener('input', event => {
    document.querySelector('#name-output').textContent = event.target.value;
       if (event.target.value === '') {
    document.querySelector('#name-output').textContent = 'Anonymous';
  }});