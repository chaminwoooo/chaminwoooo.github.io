import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// clock 
const clock = document.querySelector('#clock');

function GetClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

GetClock();
setInterval(GetClock, 1000);


// nav hover event
const hightedWords = document.querySelectorAll('.nav li');

let navEvent = () => {
    hightedWords.forEach((hightedWord) => {
        let navAddClass = () => {
            hightedWord.classList.add("hover");
        };
        let navRemoveClass = () => {
            hightedWord.classList.remove("hover");
        };
        hightedWord.addEventListener("mouseover", navAddClass);
        hightedWord.addEventListener("mouseleave", navRemoveClass);
        hightedWord.addEventListener("touchstart", navAddClass);
        hightedWord.addEventListener("touchend", navRemoveClass);
        hightedWord.addEventListener('click', navMoveScroll);
    });
}
navEvent();

function navMoveScroll() {
    window.scroll({ top: eval(this.innerText), behavior: 'smooth' });
}


