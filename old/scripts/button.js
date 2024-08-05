'use strict'

const allButtons = document.querySelectorAll('button');

allButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
        siblingsRemove(this, 'on');
        this.classList.add('on');
    })
})

function siblingsRemove(t, removeClass) {
    const children = t.parentElement.children;

    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove(removeClass);
    }
}