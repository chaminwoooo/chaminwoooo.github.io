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
// const hightedWords = document.querySelectorAll('.nav li');
// let About = document.querySelector('#about').offsetTop;
// let Works = document.querySelector('#works').offsetTop;
// let Career = document.querySelector('#career').offsetTop;
// let Playground = document.querySelector('#playGround').offsetTop;

// let navEvent = () => {
//     hightedWords.forEach((hightedWord) => {
//         navAddClass = () => {
//             hightedWord.classList.add("hover");
//         };
//         navRemoveClass = () => {
//             hightedWord.classList.remove("hover");
//         };
//         hightedWord.addEventListener("mouseover", navAddClass);
//         hightedWord.addEventListener("mouseleave", navRemoveClass);
//         hightedWord.addEventListener("touchstart", navAddClass);
//         hightedWord.addEventListener("touchend", navRemoveClass);
//         hightedWord.addEventListener('click', navMoveScroll);
//     });
// }
// navEvent();

// function navMoveScroll() {
//     window.scroll({ top: eval(this.innerText), behavior: 'smooth' });
// }

// // 스크롤 확인용
// // document.addEventListener('scroll', function navScroll() {
// //     let scrollY = document.documentElement.scrollTop;
// //     console.log('scroll : ' + scrollY);
// //     console.log('1 : ' + About);
// //     console.log('2 : ' + Works);
// //     console.log('3 : ' + Career);
// //     console.log('4 : ' + Playground);
// // });

