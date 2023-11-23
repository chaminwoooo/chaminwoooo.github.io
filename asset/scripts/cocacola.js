'use strict'

const allSection = document.querySelectorAll('section');
const navList = document.querySelectorAll('.side-nav-list a');

function sectionScroll() {
    navList.forEach((el, i) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            moveToScroll(allSection[i]);
        })
    })
}

function moveToScroll(el) {
    window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
}

function siblingsRemove(t, removeClass) {
    const children = t.parentElement.children;

    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove(removeClass);
    }
}

window.addEventListener('resize', () => {
    sectionScroll();
});

sectionScroll();