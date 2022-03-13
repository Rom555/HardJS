'use strict';

const select = document.getElementById('select');
const text = document.getElementById('text');

const url = 'cars.json';

const getData = () => {
  return fetch(url).then((response) => response.json());
};

const renderCarData = (carBrand) => {
  getData().then((data) => {
    data.cars.forEach((car) => {
      if (car.brand === carBrand) {
        text.innerHTML = `
          Тачка ${car.brand} ${car.model}<br>
          Цена: ${car.price}$
        `;
      }
    });
  });
};

select.addEventListener('input', function () {
  renderCarData(this[this.selectedIndex].value);
});

getData().then((data) => {
  data.cars.forEach((car) => {
    let option = document.createElement('option');
    option.value = car.brand;
    option.textContent = car.brand;

    select.insertAdjacentElement('beforeend', option);
  });
});
