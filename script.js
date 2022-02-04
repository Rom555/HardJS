"use strict";

let week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

let date = new Date().toLocaleDateString("ru-RU", { weekday: "long" });

for (let day of week) {
  let str = "";
  str += day.toLowerCase() === date ? str + "font-weight: bold" : "";
  str +=
    week.indexOf(day) === 5 || week.indexOf(day) === 6
      ? "font-style: italic;"
      : "";
  console.log("%c%s", str, day);
}
