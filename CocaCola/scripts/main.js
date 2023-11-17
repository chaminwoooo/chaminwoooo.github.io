'use strict'

const logo = document.querySelector('.logo');
const allSection = document.querySelectorAll('section');
const navList = document.querySelectorAll('.nav-list a');
const prdList = document.querySelectorAll('.prd-list>li');

navList.forEach((el, i) => {
    el.addEventListener('click', () => {
        moveToScroll(allSection[i]);
    })
})

prdList.forEach((el) => {
    // el.addEventListener('mouseenter', () => {
    //     siblingsRemove(el, 'on');
    //     el.classList.add('on');
    // },)
    // el.addEventListener('mouseout', () => {
    //     siblingsRemove(el, 'on');
    //     siblingsRemove(el, 'active');
    // })
    el.addEventListener('click', () => {
        console.log('click')
        // siblingsRemove(el, 'on');
        // siblingsRemove(el, 'active');
        el.classList.toggle('active');
    })
    el.querySelectorAll('.desc-wrap').forEach((desc) => {
        desc.style.top = el.querySelector('.ttl-md').offsetHeight + 'px';
    })
})

function moveToScroll(el) {
    window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
}

//  function siblings remove.
function siblingsRemove(t, removeClass) {
    const children = t.parentElement.children;

    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove(removeClass);
    }
}