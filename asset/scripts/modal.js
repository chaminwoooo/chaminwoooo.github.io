'use strict'

let dimBg = document.createElement('div');
let wrap = document.querySelector('body');
dimBg.setAttribute('class', 'dim');

class Modal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    open() {
        let md = document.querySelector(`${this.name}`);
        let okBtn = md.querySelector('.ok');

        md.classList.add('on', `${this.type}`);
        wrap.appendChild(dimBg);

        // 임시 submit 기능 추가해야함
        okBtn.addEventListener('click', function () {
            md.classList.remove('on');
            dimBg.remove();
        })
    }
    close() {
        let md = document.querySelector(`${this.name}`);
        md.classList.remove('on');
        dimBg.remove();
    }
}

let cancle = document.querySelectorAll('.cancle');
cancle.forEach((el) => {
    el.addEventListener('click', () => {
        el.parentElement.parentElement.classList.remove('on');
        dimBg.remove();
    })
});