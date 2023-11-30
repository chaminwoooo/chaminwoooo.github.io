'use strict'
const isMobile = /Mobi/i.test(window.navigator.userAgent);
const CheckOs = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let header = document.querySelector('#mainHeader');
let menu = document.querySelector('#mainMenu');

function moveToScroll(el) {
    let headerHeight = header.offsetHeight;
    window.scrollTo({ top: document.querySelector(`${el}`).offsetTop - headerHeight, behavior: 'smooth' });
}

function videoBtnPageDown() {
    const btnArrowDown = document.querySelector('.btn-arrow-down');
    btnArrowDown.addEventListener('click', () => moveToScroll('category-container'));
}

function menuSlide() {
    document.querySelector('.ham-btn').addEventListener('click', () => {
        menu.classList.toggle('active');
        menu.style.top = '10vw';
    })
}

function siblingsRemove(t, removeClass) {
    const children = t.parentElement.children;

    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove(removeClass);
    }
}

function showMenuImg() {
    let subMenuText = document.querySelectorAll('.sub-menu-txt>li');
    let subMenuImg = document.querySelectorAll('.sub-menu-img');

    subMenuText.forEach((subMenu, i) => {
        subMenu.addEventListener('mouseover', () => {
            siblingsRemove(subMenu, 'on')
            subMenu.classList.add('on');

            subMenuImg.forEach((el) => {
                siblingsRemove(el, 'on');
            })
            subMenuImg[i].classList.add('on');
        })
    })
}

function showSubTitle() {
    let menuTitle = document.querySelectorAll('.menu-title');

    if (isMobile && CheckOs == true) {
        menuTitle.forEach((title) => {
            title.addEventListener('click', () => {
                siblingsRemove(title.parentElement, 'on');
                title.parentElement.classList.toggle('on');
            })
        })
    } else {
        menuTitle.forEach((title) => {
            title.addEventListener('mouseover', () => {
                siblingsRemove(title.parentElement, 'on');
                title.parentElement.classList.add('on');
                menuInit();
            })
        })
    }
}

function menuInit() {
    let subMenuText = document.querySelectorAll('.sub-menu-txt>li');
    let subMenuImg = document.querySelectorAll('.sub-menu-img');
    let subMenuWrap = document.querySelectorAll('.sub-menu-wrap');
    let menuList = document.querySelectorAll('.menu-list');

    function subImgInit() {
        subMenuImg.forEach((el) => {
            siblingsRemove(el, 'on');
        })
    }

    function subTextInit() {
        subMenuText.forEach((el) => {
            siblingsRemove(el, 'on');
        })
    }

    subMenuWrap.forEach((el) => {
        el.addEventListener('mouseleave', () => {
            menuList.forEach((list) => {
                if (list.classList.contains('on')) {
                    siblingsRemove(list, 'on');
                    subImgInit();
                    subTextInit();
                }
            })
        })
    })
    subImgInit();
    subTextInit();
}

function headerSlide() {
    addEventListener('resize',()=>{
        if (window.innerWidth >= 1024){
            addEventListener('scroll', () => {
                if (window.scrollY < 1) {
                    header.style.height = '0px';
                } else {
                    header.style.height = '10vw';
                }
            })
        }
    })
}

function scrollEvent(el) {
    let thisContent = document.querySelector(`.${el}`);

    window.addEventListener('scroll', () => {
        let headerHeight = header.offsetHeight;
        if (window.scrollY > thisContent.offsetTop - (headerHeight * 3)) {
            thisContent.classList.add('on');
        } else if (window.scrollY == 0) {
            thisContent.classList.remove('on');
        }
    })
}

showMenuImg();
showSubTitle();
menuSlide();
headerSlide();
scrollEvent('product');