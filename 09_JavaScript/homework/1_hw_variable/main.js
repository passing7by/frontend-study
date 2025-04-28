const btnGrow = document.querySelector('.btn-grow');
const imgGrow = document.querySelector('.img-grow');

btnGrow.addEventListener('click', () => {
  console.log('width: '+imgGrow.width+' height: '+imgGrow.height);

  nowWidth = imgGrow.width;
  nowHeight = imgGrow.height;

  imgGrow.width = nowWidth + 100;
  imgGrow.height = nowHeight + 100;
  
  console.log('width: '+imgGrow.width+' height: '+imgGrow.height);
})

const inputWidth = document.querySelector('.input-width');
const inputHeight = document.querySelector('.input-height');
const btnChange = document.querySelector('.btn-change');
const imgChange = document.querySelector('.img-change');

btnChange.addEventListener('click', () => {
  console.log('width: '+imgChange.width+' height: '+imgChange.height);
  
  nowWidth = imgChange.width;
  nowHeight = imgChange.height;

  imgChange.width = nowWidth + Number(inputWidth.value);
  imgChange.height = nowHeight + Number(inputHeight.value);

  console.log('width: '+imgChange.width+' height: '+imgChange.height);

  // input 안의 값 clean
  inputWidth.value = '';
  inputHeight.value = '';
})