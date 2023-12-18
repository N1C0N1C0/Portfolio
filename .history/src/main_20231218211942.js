/**
 * Header에 페이지 아래로 스크롤시 다크 스타일로 적용
 * getBoundingClientRect() - 길이를 구함
 * 
 */
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.screenY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});