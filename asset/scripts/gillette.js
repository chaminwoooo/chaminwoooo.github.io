'use strict'

let header = document.querySelector('#mainHeader');
let menu = document.querySelector('#mainMenu');
let menuList = menu.querySelectorAll('.menu-list');
let subMenu = menu.querySelectorAll('.sub-menu-txt>li');
let subMenuImg = menu.querySelectorAll('.sub-menu-img');


function moveToScroll(el) {
    let headerHeight = header.offsetHeight;
    window.scrollTo({ top: document.querySelector(`.${el}`).offsetTop - headerHeight, behavior: 'smooth' });
}

function videoBtnPageDown() {
    const btnArrowDown = document.querySelector('.btn-arrow-down');
    btnArrowDown.addEventListener('click', () => moveToScroll('category-container'));
}

function init() {
    addEventListener('resize', () => {
    })
    videoBtnPageDown();
    headerSlide();
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

function headerSlide() {
    addEventListener('scroll', function () {
        setInterval(() => {
            if (window.scrollY < 1) {
                header.style.height = '0px'
                header.style.overflow = 'hidden';
            } else {
                header.style.height = '15vh';
            }
        }, 200);
    })
}

function menuSlide() {
    document.querySelector('.ham-btn').addEventListener('click', () => {
        menu.classList.toggle('active');
        menu.style.top = '15vh';
    })
}

function siblingsRemove(t, removeClass) {
    const children = t.parentElement.children;

    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove(removeClass);
    }
}


init();




headerSlide();
menuSlide();
