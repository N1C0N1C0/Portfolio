'use strict';

/**
 * 프로젝트 필터링 관련 로직 처리
 */
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (e) => {
    const filter = e.target.dataset.category;
    if(filter == null) {
        return;
    }
    handleActiveSelection(event.target);
    

});

function handleActiveSelection(e) {
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    e.target.classList.add('category--selected');
}

function filterProject(filter) {
    projectsContainer.classList.add('anim-out');
    projects.forEach(project => {
        console.log(project);
        if(filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    setTimeout(() => {
        projectsContainer.classList.remove('anim-out');
    },250)
}