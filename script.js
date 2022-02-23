'use strict';
const square = document.querySelector('.square');
const animationBtn = document.getElementById('animation');
const resetBtn = document.getElementById('reset');

let active = false;
let count = 0;
let idAnimation;

let squareTop = 90;
let addTop = false;
let squareLeft = 0;
let addLeft = true;

const renderSquare = () => {
  square.style.top = squareTop + 'px';
  square.style.left = squareLeft + 'px';
};

const moveSquare = () => {
  count++;
  idAnimation = requestAnimationFrame(moveSquare);

  addTop = squareTop === 0 ? true : squareTop === 500 ? false : addTop;
  addLeft = squareLeft === 0 ? true : squareLeft === 500 ? false : addLeft;

  squareTop += addTop ? 10 : -10;
  squareLeft += addLeft ? 10 : -10;

  renderSquare();
};

animationBtn.addEventListener('click', () => {
  if (active) {
    cancelAnimationFrame(idAnimation);
  } else {
    idAnimation = requestAnimationFrame(moveSquare);
  }
  active = !active;
});

resetBtn.addEventListener('click', () => {
  cancelAnimationFrame(idAnimation);

  squareTop = 90;
  addTop = false;
  squareLeft = 0;
  addLeft = true;

  active = false;

  renderSquare();
});

renderSquare();
