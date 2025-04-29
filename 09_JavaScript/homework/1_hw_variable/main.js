const btnGrow = document.querySelector('.btn-grow');
const imgGrow = document.querySelector('.img-grow');

btnGrow.addEventListener('click', () => {
  console.log('width: '+imgGrow.width+' height: '+imgGrow.height);

  const nowWidth = imgGrow.width;
  const nowHeight = imgGrow.height;

  // 방법1
  imgGrow.width = nowWidth + 100;
  imgGrow.height = nowHeight + 100;
  // 방법2
  // imgGrow.style.width = nowWidth + 100 + 'px';
  // imgGrow.style.height = nowHeight + 100 + 'px';
  
  console.log('width: '+imgGrow.width+' height: '+imgGrow.height);
})

const inputWidth = document.querySelector('.input-width');
const inputHeight = document.querySelector('.input-height');
const btnChange = document.querySelector('.btn-change');
const imgChange = document.querySelector('.img-change');

btnChange.addEventListener('click', () => {
  console.log('width: '+imgChange.width+' height: '+imgChange.height);
  
  const nowWidth = imgChange.width;
  const nowHeight = imgChange.height;

  imgChange.width = nowWidth + Number(inputWidth.value);
  imgChange.height = nowHeight + Number(inputHeight.value);

  console.log('width: '+imgChange.width+' height: '+imgChange.height);

  // input 안의 값 clean
  inputWidth.value = '';
  inputHeight.value = '';
})