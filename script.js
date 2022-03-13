'use strict';

const select = document.querySelector('select');
const inputFrom = document.getElementById('convertFrom');
const labelFrom = document.getElementById('labelFrom');
const inputTo = document.getElementById('convertTo');
const labelTo = document.getElementById('labelTo');
const convertBtn = document.getElementById('convert');

const eurText = 'Евро (EUR)';
const usdText = 'Доллар США (USD)';
const rubText = 'Российский Рубль (RUB)';

let rub, usd;

select.addEventListener('input', () => {
  let selectValue = select[select.selectedIndex].value;

  switch (true) {
    case selectValue === 'usd to rub':
      labelFrom.textContent = usdText;
      labelTo.textContent = rubText;
      break;
    case selectValue === 'rub to usd':
      labelFrom.textContent = rubText;
      labelTo.textContent = usdText;
      break;
    case selectValue === 'eur to rub':
      labelFrom.textContent = eurText;
      labelTo.textContent = rubText;
      break;
    case selectValue === 'rub to eur':
      labelFrom.textContent = rubText;
      labelTo.textContent = eurText;
      break;
  }

  inputFrom.value = '';
  inputTo.value = '';
});

convertBtn.addEventListener('click', () => {
  let selectValue = select[select.selectedIndex].value;
  let value = 0;
  let inputFromValue = inputFrom.value;

  switch (true) {
    case selectValue === 'usd to rub':
      value = (inputFromValue / usd) * rub;
      break;
    case selectValue === 'rub to usd':
      value = (inputFromValue / rub) * usd;
      break;
    case selectValue === 'eur to rub':
      value = inputFromValue * rub;
      break;
    case selectValue === 'rub to eur':
      value = inputFromValue / rub;
      break;
  }

  inputTo.value = Math.floor(value * 100) / 100;
});

fetch(
  `http://api.exchangeratesapi.io/v1/latest?access_key=e7457748daddb92c030ec1e0fa0c7998&symbols=USD,RUB`
)
  .then((response) => response.json())
  .then((data) => {
    rub = data.rates.RUB;
    usd = data.rates.USD;
  })
  .catch((error) => console.log(error.message));
