'use strict';

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
  event.preventDefault();

  switch (event.key) {
    case 'ArrowUp':
      elem.style.top = +elem.style.top.slice(0, -2) - 10 + 'px';
      break;
    case 'ArrowDown':
      elem.style.top = +elem.style.top.slice(0, -2) + 10 + 'px';
      break;
    case 'ArrowLeft':
      elem.style.left = +elem.style.left.slice(0, -2) - 10 + 'px';
      break;
    case 'ArrowRight':
      elem.style.left = +elem.style.left.slice(0, -2) + 10 + 'px';
      break;
  }
};

const newELem = new DomElement('.square', 100, 100, 'red', 20);

document.addEventListener('DOMContentLoaded', () => {
  let elem = newELem.createElem();
  elem.style.position = 'absolute';
  document.body.append(elem);

  document.addEventListener('keydown', () => {
    moveElem(elem);
  });
});
