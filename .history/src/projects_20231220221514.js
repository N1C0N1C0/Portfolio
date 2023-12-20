'use strict';

/**
 * 프로젝트 필터링 관련 로직 처리
 */
const categories = document.querySelector('.categories');
categories.addEventListener('click', (e) => {
    const filter = e.target.dataset.category;
    if(filter == null) {
        return;
    }
    console.log(filter);
})