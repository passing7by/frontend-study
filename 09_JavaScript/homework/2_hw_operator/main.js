const btnAddBall = document.querySelector('.btn-addBall');
const btOddOrEven = document.querySelector('.btn-oddOrEven');
const btnCleanBall = document.querySelector('.btn-cleanBall');
const ballWrapper = document.querySelector('.ball-wrapper');

let ballEl = document.createElement('div');
ballEl.style.width = '50px';
ballEl.style.height = '50px';
ballEl.style.borderRadius = '50%';
ballEl.style.backgroundColor = 'aqua';

btnAddBall.addEventListener('click', () => {
  ballWrapper.appendChild(ballEl);
});

btOddOrEven.addEventListener('click', () => {
  ballWrapper.l
});