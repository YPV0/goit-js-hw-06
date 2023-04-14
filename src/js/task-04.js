let counterValue = 0;
const currentValue = document.querySelector('#value');
const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');

increment.addEventListener('click', () => {
  counterValue += 1;
  currentValue.textContent = counterValue;
});

decrement.addEventListener('click', () => {
  counterValue -= 1;
  currentValue.textContent = counterValue;
});