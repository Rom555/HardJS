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
  }

  if (this.selector[0] === '#') {
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

  document.body.append(elem);
};

const newELem = new DomElement('#circle', 200, 300, 'red', 20);
newELem.createElem('text');
