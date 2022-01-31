const lang = prompt("На каком языке выводить дни недели?");

const weekDaysRu =
  "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье";
const weekDaysEn =
  "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";
// 1.a
if (lang === "ru") {
  console.log(weekDaysRu);
} else if (lang === "en") {
  console.log(weekDaysEn);
} else {
  console.log("Неверное значение");
}

// 1.b
switch (lang) {
  case "ru":
    console.log(weekDaysRu);
    break;
  case "en":
    console.log(weekDaysEn);
    break;
  default:
    console.log("Неверное значение");
}

// 1.c
const weekDays = { ru: weekDaysRu, en: weekDaysEn };
console.log(weekDays[lang]);

// 2
const namePerson = prompt("Введите имя");
namePerson === "Артем"
  ? console.log("директор")
  : namePerson === "Александр"
  ? console.log("преподаватель")
  : console.log("студент");
