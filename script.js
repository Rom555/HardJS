'use strict';

const input = document.getElementById('input');
const p = document.getElementById('p');

let timeoutId;

input.addEventListener('keyup', function () {
  if (timeoutId) clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    p.textContent = this.value;
  }, 300);
});
