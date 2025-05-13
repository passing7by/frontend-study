// 2. Math 객체 연습
const extractString = (tagEl) => {
  const innerText = tagEl.innerText;
  const colonIdx = tagEl.innerText.indexOf(':');

  return innerText.slice(0, colonIdx + 2);
}

const extractNumber = (tagEl) => {
  const innerText = tagEl.innerText;
  const colonIdx = tagEl.innerText.indexOf(':');

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
  // floorEl의 innerText에서, :까지는 그대로 남겨두고, 그 이후의 값은 result를 덧붙임
  floorEl.innerText = extractString(floorEl) + floorResult;

  const roundEl = document.querySelector('#round');
  const round = extractNumber(roundEl);
  const roundResult = Math.round(round);
  roundEl.innerText = extractString(roundEl) + roundResult;
  
  const ceilEl = document.querySelector('#ceil');
  const ceil = extractNumber(ceilEl);
  const ceilResult = Math.ceil(ceil);
  ceilEl.innerText = extractString(ceilEl) + ceilResult;
  
  const absEl = document.querySelector('#abs');
  const abs = extractNumber(absEl);
  const absResult = Math.abs(abs);
  absEl.innerText = extractString(absEl) + absResult;
  
  const powEl = document.querySelector('#pow');
  const pow = extractNumber(powEl);
  const powResult = powStr(pow);
  powEl.innerText = extractString(powEl) + powResult;
}