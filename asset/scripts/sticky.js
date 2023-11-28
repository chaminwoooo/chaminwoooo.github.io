'use strict'

let stickyTab = document.querySelectorAll('.sticky-tab');

stickyTab[0].style.top = '0px'
stickyTab.forEach((el, index) => {
    if (index == 1) el.style.top = stickyTab[index - 1].offsetHeight + 'px'
    if (index == 2) el.style.top = stickyTab[index - 1].offsetHeight + stickyTab[index - 2].offsetHeight + 'px'
})
// reduce 로 누적높이값 더해서 붙이고 싶은데 방법 찾는중..

let scrollWrap = document.querySelector('.x-scroll ul');
let scrollList = document.querySelectorAll('.x-scroll li');

scrollList.forEach((li, index) => {
    li.addEventListener('click', () => {
        siblingsRemove(li, 'on')
        li.classList.add('on');
        scrollWrap.scrollTo({ left: (li.offsetWidth * (index)), behavior: 'smooth' });
        console.log(li.offsetWidth * index);
    })
})

function siblingsRemove(t, removeClass) {
    const children = t.parentElement.children;

    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove(removeClass);
    }
}