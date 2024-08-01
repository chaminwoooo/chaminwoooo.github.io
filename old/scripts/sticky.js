'use strict'

let stickyTab = document.querySelector('.sticky');
let contentsWrap = document.querySelectorAll('.sample-box');

stickyTab.style.top = '0px'

let scrollWrap = document.querySelector('.x-scroll ul');
let scrollList = scrollWrap.querySelectorAll('li');

scrollList.forEach((li, index) => {
    li.addEventListener('click', () => {
        siblingsRemove(li, 'on')
        li.classList.add('on');

        if (index >= 3 && li.classList.contains('on')) {
            scrollWrap.scrollTo({ left: (li.offsetWidth * (index - 2)), behavior: 'smooth' })
        } else if (index < 2 && li.classList.contains('on')) {
            scrollWrap.scrollTo({ left: (li.offsetWidth * (index - 2)), behavior: 'smooth' })
        }

        if (contentsWrap[index]) {
            window.scrollTo({ top: contentsWrap[index].offsetTop - (scrollWrap.offsetHeight - 20), behavior: 'smooth' });
        }

    })

    window.addEventListener('scroll', () => {
        if (contentsWrap[index] && contentsWrap[index].classList.contains('on')) {
            siblingsRemove(scrollList[index], 'on');
            scrollList[index].classList.add('on');
            scrollWrap.scrollTo({ left: (li.offsetWidth * (index - 2)), behavior: 'smooth' })
        }
    })
})

contentsWrap.forEach((box, i) => {
    window.addEventListener('scroll', () => {
        if (window.scrollY >= box.offsetTop - scrollWrap.offsetHeight - 20) {
            siblingsRemove(box, 'on')
            box.classList.add('on');
        }
    });
})


function siblingsRemove(t, removeClass) {
    const children = t.parentElement.children;

    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove(removeClass);
    }
}