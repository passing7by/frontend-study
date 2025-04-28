// 1. 구슬 놀이
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

// 2. 계산기
const inputFirstNum = document.querySelector('.input-firstNum');
const inputSecondNum = document.querySelector('.input-secondNum');
const btns = document.querySelectorAll('.btn');
const spanCalResult = document.querySelector('.span-calResult');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const clickedOperator = btn.textContent;
    const inputedFirstNum = Number(inputFirstNum.value);
    const inputedSecondNum = Number(inputSecondNum.value);

    switch (clickedOperator) {
      case '+':
        spanCalResult.textContent = inputedFirstNum + inputedSecondNum;
        break;

      case '-':
        spanCalResult.textContent = inputedFirstNum - inputedSecondNum;
        break;
          
      case 'X':
        spanCalResult.textContent = inputedFirstNum * inputedSecondNum;
        break;
        
      case '/':
        spanCalResult.textContent = inputedFirstNum / inputedSecondNum;
        break;
        
      default:
        spanCalResult.textContent = inputedFirstNum % inputedSecondNum;
        break;
    }

    // 계산 완료 후 input 안의 값 지우기
    inputFirstNum.value = '';
    inputSecondNum.value = '';
  })
});

// 4. 문자 누적하기
const inputWord = document.querySelector('.input-word');
const btnAddWord = document.querySelector('.btn-addWord');
const textareaResult = document.querySelector('.textarea-result');

btnAddWord.addEventListener('click', () => {
  textareaResult.textContent += inputWord.value;
  inputWord.value = '';
});