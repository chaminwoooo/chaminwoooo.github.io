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
        wrap.style.position = 'relative';
        wrap.appendChild(dimBg);

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