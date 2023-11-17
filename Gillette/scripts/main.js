'use strict'

let header = document.querySelector('.main-header');
let main = document.querySelector('.menu');
let mainMenu = document.querySelectorAll('.menu-list');
let subMenu = document.querySelectorAll('.sub-menu-txt>li');
let subMenuImg = document.querySelectorAll('.sub-menu-img');

// 서브 메뉴 높이값 설정 
let subMenuWrap = document.querySelectorAll('.sub-menu-wrap');
let navHeight = document.querySelector('nav').offsetHeight;


function init() {
    addEventListener('resize', () => {
        navHeight = document.querySelector('nav').offsetHeight;
        console.log('resize')
    })
    navInit();
    headerSlide();
}

function headerSlide() {
    addEventListener('scroll', function () {
        setInterval(() => {
            if (this.window.scrollY < 1) {
                header.style.height = '0px'
                header.style.overflow = 'hidden';
            } else {
                header.style.height = navHeight + 'px';
                header.style.overflow = 'visible';
            }
        }, 200);
    })
}

function navInit() {
    mainMenu.forEach((list) => {
        list.addEventListener('mouseover', () => {
            siblingsRemove(list, 'on');
            list.classList.add('on');
        })
    })

    subMenuWrap.forEach((wrap) => {
        wrap.style.top = navHeight + 'px';
        wrap.addEventListener('mouseout', () => {
            wrap.parentElement.classList.remove('on');
            subMenuImg.forEach((img) => {
                siblingsRemove(img, 'on');
            })
        })
    })

    subMenu.forEach((list, i) => {
        list.addEventListener('mouseover', () => {
            subMenuImg.forEach((img) => {
                siblingsRemove(img, 'on');
            })
            subMenuImg[i].classList.add('on');
        })
    })
    subMenuImg.forEach((el) => {
        el.classList.remove('on')
    })
}

//  function siblings remove.
function siblingsRemove(t, removeClass) {
    const children = t.parentElement.children;

    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove(removeClass);
    }
}

// 스크롤 이동 함수
function moveToScroll(el) {
    window.scrollTo({ top: document.querySelector(`.${el}`).offsetTop - navHeight, behavior: 'smooth' });
}

class Scroll {
    constructor(name) {
        this.name = name;
    }
    addClass() {
        let thisContent = document.querySelector(`.${this.name}`);

        setInterval(() => {
            addEventListener('scroll', function () {
                if (this.window.scrollY + (navHeight * 2) > thisContent.offsetTop) {
                    thisContent.classList.add('on');
                }
            })
        }, 500);
        siblingsRemove(thisContent, 'on');
    }
}

init();