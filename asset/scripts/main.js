"use strict";


window.onload = function () {

    setTimeout(() => {
        TypeHangul.type('.logo',{
            intervalType : 100,
        })
        
        let $target = document.querySelector('.logo');
        $target.addEventListener('th.endType', function (e) {
            this.classList.add('done');
        });    
    }, 2000);
}

