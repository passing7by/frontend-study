// TODO: findColonIdx() 만든 후, 2번 문제 완료하기
const findColonIdx = (tagEl) => {

}

const extractNumber = (tagEl) => {
  const innerText = tagEl.innerText;
  const colonIdx = innerText.indexOf(':');

  return innerText.slice(colonIdx + 2);
}

const powStr = (str) => {
  const powIdx = str.indexOf('^');
  const squaredNum = str.slice(0, powIdx);
  const squareNum = str.slice(powIdx + 1);
  
  return Math.pow(squaredNum, squareNum);
}

const applyMathFunctions = () => {
  const floorEl = document.querySelector('#floor');
  const floor = extractNumber(floorEl);
  const floorResult = Math.floor(floor);
  floorEl.innerText = 

  const roundEl = document.querySelector('#round');
  const round = extractNumber(roundEl);
  const roundResult = Math.round(round);

  const ceilEl = document.querySelector('#ceil');
  const ceil = extractNumber(ceilEl);
  const ceilResult = Math.ceil(ceil);

  const absEl = document.querySelector('#abs');
  const abs = extractNumber(absEl);
  const absResult = Math.abs(abs);

  const powEl = document.querySelector('#pow');
  const pow = extractNumber(powEl);
  const powResult = powStr(pow);
}