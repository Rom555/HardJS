"use strict";

const myFunc = function (str) {
  if (typeof str !== "string") {
    return "Передана не строка";
  }

  str = str.trim();

  if (str.length > 30) {
    return str.substring(0, 30) + "...";
  }

  return str;
};

console.log(myFunc(prompt()));
