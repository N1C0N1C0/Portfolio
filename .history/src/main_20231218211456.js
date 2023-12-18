const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // 스크롤 되는 Y 좌표가 hedaerHeight보다 크면 다른 스타일링!
    console.log(window.scrollY);
})