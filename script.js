'use strict';

document.body.style.height = '100vh';
document.body.style.margin = '0px';
let bodyWidth = +getComputedStyle(document.body).width.slice(0, -2);
let bodyHeight = +getComputedStyle(document.body).height.slice(0, -2);

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = +height;
  this.width = +width;
  this.bg = bg;
  this.fontSize = +fontSize;
};

DomElement.prototype.createElem = function (text) {
  let elem;

  if (this.selector[0] === '.') {
    elem = document.createElement('div');
    elem.className = this.selector.substring(1);
  } else if (this.selector[0] === '#') {
    elem = document.createElement('p');
    elem.id = this.selector.substring(1);
  }

  elem.style.cssText = `
    height: ${this.height}px;
    width: ${this.width}px;
    background: ${this.bg};
    font-size: ${this.fontSize}px;
  `;

  elem.textContent = text;

  return elem;
};

const moveElem = (elem) => {
  let top = +elem.style.top.slice(0, -2);
  let left = +elem.style.left.slice(0, -2);

  switch (event.key) {
    case 'ArrowUp':
      if (top < 10) {
        break;
      }

      elem.style.top = top - 10 + 'px';
      break;
    case 'ArrowDown':
      if (top > bodyHeight - 10 - 100) {
        break;
      }

      elem.style.top = top + 10 + 'px';
      break;
    case 'ArrowLeft':
      if (left < 10) {
        break;
      }

      elem.style.left = left - 10 + 'px';
      break;
    case 'ArrowRight':
      if (left > bodyWidth - 10 - 100) {
        break;
      }

      elem.style.left = left + 10 + 'px';
      break;
  }
};

const newELem = new DomElement('.square', 100, 100, 'red', 20);

document.addEventListener('DOMContentLoaded', () => {
  let elem = newELem.createElem();
  elem.style.position = 'absolute';
  elem.style.top = '10px';
  elem.style.left = '10px';
  document.body.append(elem);

  document.addEventListener('keydown', () => {
    moveElem(elem);
  });
});
