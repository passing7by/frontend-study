// ScrollMagic 사용
const spyEls = document.querySelectorAll('section.scroll-spy')
console.log(spyEls);

const controller = new ScrollMagic.Controller();
spyEls.forEach(function (spyEl) {
  // 메소드 체이닝
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.6 // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'underline') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(controller); // 컨트롤러에 장면을 할당(필수!!) - 라이브러리에서 지정한 문법 깊게 이해할 필요x
  });

// 모달 버튼 제어
const rmModalBtnList = document.querySelectorAll('.projects .projects__readme');
const rmModal = document.querySelector('#readmeModal');
const rmModalCloseBtn = document.querySelector('#readmeModal .btn-close');

rmModalCloseBtn.addEventListener('click', function () {
  rmModal.style.display = 'none';
});

rmModalBtnList.forEach(function (rmModalBtn, index) {
  rmModalBtn.addEventListener('click', function () {
    rmModal.style.display = 'flex';
  });
});

// 화면 스크롤 이벤트 감지하여 헤더 스타일 & 스크롤업 버튼 변화
const headerBg = document.querySelector('#header');
const headerLis = document.querySelectorAll('#header .inner nav ul li a');
const scrollUpBtn = document.querySelector('#scroll-up');
console.log(scrollUpBtn);



window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    headerBg.style.backgroundColor = '#fff';
    
    headerLis.forEach((headerLi) => {
      headerLi.style.color = '#362d2a';
    });
  } else {
    headerBg.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    headerBg.style.boxShadow = '0 2px 8px rgba(255, 255, 255, 0)';
    
    headerLis.forEach((headerLi) => {
      headerLi.style.color = 'rgba(255, 255, 255, 0.81)';
    });
  } 

  if (window.scrollY >= 500) {
    scrollUpBtn.style.opacity = 1;
    scrollUpBtn.style.transform = 'translateX(0)';   
  } else {
    scrollUpBtn.style.opacity = 0;
    scrollUpBtn.style.transform = 'translateX(100px)'; 
  }
});
