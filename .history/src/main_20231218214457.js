/**
 * Header에 페이지 아래로 스크롤시 다크 스타일로 적용
 * getBoundingClientRect() - 길이를 구함
 * window.screenY - 현재 Y의 위치 표시
 */
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});

/**
 * Home 섹션을 아래로 스크롤시 투명하게 처리함
 *
 */
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
    
})