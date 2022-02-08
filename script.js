"use strict";

const date1 = document.querySelector(".date1");
const date2 = document.querySelector(".date2");

const correctCase = function (number, cases) {
  if (10 <= number && number <= 19) {
    return number + " " + cases[2];
  }
  let devidedNumber = number % 10;
  switch (true) {
    case devidedNumber === 1:
      return number + " " + cases[0];
    case 2 <= devidedNumber && devidedNumber <= 4:
      return number + " " + cases[1];
    case (5 <= devidedNumber && devidedNumber <= 9) || devidedNumber === 0:
      return number + " " + cases[2];
  }
};

const getDate1 = function (date) {
  let weekday, dayAndMonth, year, hours, minutes, seconds;

  weekday = date.toLocaleDateString("ru-RU", { weekday: "long" });
  weekday = weekday[0].toUpperCase() + weekday.substring(1);

  dayAndMonth = date.toLocaleDateString("ru-RU", {
    month: "long",
    day: "numeric",
  });

  year = date.getFullYear();
  hours = correctCase(date.getHours(), ["час", "часа", "часов"]);
  minutes = correctCase(date.getMinutes(), ["минута", "минуты", "минут"]);
  seconds = correctCase(date.getSeconds(), ["секунда", "секунды", "секунд"]);

  return `Сегодня ${weekday}, ${dayAndMonth} ${year} года, ${hours} ${minutes} ${seconds}`;
};

const addZero = function (number) {
  if (String(number).length < 2) {
    return "0" + number;
  }
  return number;
};

const getDate2 = function (date) {
  let day, month, year, hours, minutes, seconds;

  day = addZero(date.getDate());
  month = addZero(date.getMonth());
  year = date.getFullYear();

  hours = addZero(date.getHours());
  minutes = addZero(date.getMinutes());
  seconds = addZero(date.getSeconds());

  return `${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`;
};

const print = function (date) {
  date1.textContent = getDate1(date);
  date2.textContent = getDate2(date);
};

setInterval(function () {
  let now = new Date();

  print(now);
}, 1000);
