/**
 * Header에 페이지 아래로 스크롤시 다크 스타일로 적용
 * getBoundingClientRect() - 길이를 구함
 * window.screenY - 현재 Y의 위치 표시
 */
const header = document.querySelector('.header');
console.log(headerHeight);
document.addEventListener('scroll', () => {
    console.log(window.screenY);
    if(window.screenY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});