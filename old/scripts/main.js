'use strict'

let roundBox = document.querySelectorAll('.round-box');

roundBox.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('생각중')
    })
})


function siblingsRemove(t, removeClass) {
    const children = t.parentElement.children;

    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove(removeClass);
    }
}