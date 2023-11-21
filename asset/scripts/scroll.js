'use strict';

const contentBox = document.querySelectorAll('.box');
const scrollList = document.querySelectorAll('.scroll-list li');

/*
function moveToScroll(el) {
    window.scrollTo({ top: document.querySelector(`.${el}`).offsetTop, behavior: 'smooth' });
}
*/

function siblingsRemove(t, removeClass) {
    const children = t.parentElement.children;

    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove(removeClass);
    }
}

function scrollListCheck() {
    scrollList.forEach((el, i) => {
        el.addEventListener('click', () => {
            window.scrollTo({ top: contentBox[i].offsetTop, behavior: 'smooth' })
        })
    })
}
function contentBoxScrollCheck() {
    contentBox.forEach((box, i) => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= box.offsetTop) {
                siblingsRemove(box, 'on')
                box.classList.add('on');
            }
            // 체크용
            if (box.classList.contains('on')) {
                siblingsRemove(scrollList[i], 'on');
                scrollList[i].classList.add('on');
            }
        });
    })
}


window.addEventListener('resize', () => {
    console.log('resizing!')
    scrollListCheck();
    contentBoxScrollCheck();
})

scrollListCheck();
contentBoxScrollCheck();