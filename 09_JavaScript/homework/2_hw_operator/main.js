const btnAddBall = document.querySelector('.btn-addBall');
const btOddOrEven = document.querySelector('.btn-oddOrEven');
const btnCleanBall = document.querySelector('.btn-cleanBall');
const ballWrapper = document.querySelector('.ball-wrapper');

btnAddBall.addEventListener('click', () => {
  let ballEl = document.createElement('div');
  ballEl.style.width = '50px';
  ballEl.style.height = '50px';
  ballEl.style.borderRadius = '50%';
  ballEl.style.backgroundColor = 'aqua';

  ballWrapper.append(ballEl);
});

btOddOrEven.addEventListener('click', () => {
  const ballNum = ballWrapper.childNodes.length;

  let result = ballNum % 2 === 0 ? '짝수입니당' : '홀수입니당';

  alert(result);
});

btnCleanBall.addEventListener('click', () => {
  ballWrapper.textContent = '';
});