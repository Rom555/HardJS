'use strict';

const getData = (url) => {
  return fetch(url).then((response) => response.json());
};

const sendData = ({ url, data = {} }) => {
  return fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) =>
    response.ok ? '' : console.log('Данные не отправились')
  );
};

getData('db.json')
  .then((data) => {
    sendData({
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: JSON.stringify(data),
    });
  })
  .catch((error) => console.log(error));

//hard
const xhrGetData = (url, callback, callbackUrl) => {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
      callback(callbackUrl, xhr.response);
    }
  };

  xhr.onerror = function () {
    console.log('Ошибка получения данных');
  };
};

const xhrSendData = (url, data) => {
  let xhr = new XMLHttpRequest();

  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
  xhr.send(JSON.stringify(data));

  xhr.onload = function () {
    if (xhr.status != 201) {
      console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    }
  };

  xhr.onerror = function () {
    console.log('Ошибка отправки данных');
  };
};

xhrGetData(
  'db.json',
  xhrSendData,
  'https://jsonplaceholder.typicode.com/posts'
);
