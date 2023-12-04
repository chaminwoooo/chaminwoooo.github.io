'use strict'

let stickyTab = document.querySelectorAll('.sticky-tab');
let contentsWrap = document.querySelectorAll('.sample-box');

stickyTab[0].style.top = '0px'
stickyTab.forEach((el, index) => {
    if (index == 1) el.style.top = stickyTab[index - 1].offsetHeight + 'px'
    if (index == 2) el.style.top = stickyTab[index - 1].offsetHeight + stickyTab[index - 2].offsetHeight + 'px'
})
// reduce 로 누적높이값 더해서 붙이고 싶은데 방법 찾는중..

let scrollWrap = document.querySelector('.x-scroll.main ul');
let scrollList = scrollWrap.querySelectorAll('.x-scroll li');

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
        if(contentsWrap[index] && contentsWrap[index].classList.contains('on')){
            console.log(contentsWrap[index]);
            // if (index >= 3 && li.classList.contains('on')) {
                console.log(scrollList[index]);
                scrollWrap.scrollTo({ left: (li.offsetWidth * (index - 2)), behavior: 'smooth' })
            // } else if (index < 2 && li.classList.contains('on')) {
            //     scrollWrap.scrollTo({ left: (li.offsetWidth * (index - 2)), behavior: 'smooth' })
            // }   
        }
    })
})

contentsWrap.forEach((box, i) => {
    window.addEventListener('scroll', () => {
        if (window.scrollY >= box.offsetTop) {
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