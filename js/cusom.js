// 프로그래밍 언어 조합 약속:
// menu_icon : 스네이프 케이스
// menu-icon : 하이픈 케이스
// menuIcon : 카멜케이스

// addEventListener(): 이벤트 리스너 추가
//contains(): 클래스 포함 여부 - boolean
// getAttribute(): 속성값 가져오기 - 파라미터 1개 - 파라미터로 지정된 속성의 값을 가져온다
// setAttribute(): 속성값 설정하기 - 파라미터 2개 - 파라미터는 설정할 속성 이름, 두번쨰 파라미터는 설정할 속성의 값
const menuIcon = document.querySelector('.menu-icon');
// console.log(menuIcon):
const menuIconFont = document.querySelector('.menu-icon > i');
const mobileMenus = document.querySelector('.mobile-menus');
console.dir(mobileMenus);
//  menu icon click event
menuIcon.addEventListener('click', function () {
  this.classList.toggle('active');

  if (this.classList.contains('active')) {
    menuIconFont.setAttribute('class', 'ri-close-large-line');
    mobileMenus.style.height = mobileMenus.scrollHeight + 'px';
  } else {
    menuIconFont.setAttribute('class', 'ri-menu-line');
    mobileMenus.style.height = 0;
  }
});

//console.log(menuIcon.getAttribute('class'));
//menuIcon.setAttribute('class', 'abcde');

// header style change when scrolling down
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  //   console.log(window.scrollY);
  const scrollTop = window.scrollY;

  if (scrollTop > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

// Swiper Slider Option

setTimeout(() => {
  // 실행 가능한 함수, 시간

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // Default: Horizontal
    loop: true,
    // 슬라이더 무한 반복

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      //  페이지네이션 클릭 가능 여부: 클릭한 index로 슬라이더 이동
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar - 가로 프로세스 바
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
}, 300);

// Fit Insta Image Height
const instaImgHeight = document.querySelector('#h').scrollWidth;
document.querySelector('#fh').style.height = instaImgHeight + 'px';
// console.log(instaImgHeight);

window.addEventListener('resize', function () {
  const instaImgHeight = document.querySelector('#h').scrollWidth;
  document.querySelector('#fh').style.height = instaImgHeight + 'px';
});
