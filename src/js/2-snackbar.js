
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

document.getElementById('promise-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const delay = parseInt(event.target.delay.value);
  const state = event.target.state.value;

  createPromise(delay, state)
    .then(delay => {
      showSnackbar(`✅ Fulfilled promise in ${delay}ms`);
    })
    .catch(delay => {
      showSnackbar(`❌ Rejected promise in ${delay}ms`);
    });
});

// Функция создания промиса
function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

// Функция для отображения уведомления (snackbar)
function showSnackbar(message) {
  const snackbar = document.getElementById('snackbar');
  snackbar.textContent = message;
  snackbar.className = 'snackbar show';
  setTimeout(() => {
    snackbar.className = snackbar.className.replace('show', '');
  }, 3000); // Уведомление отображается 3 секунды
}
