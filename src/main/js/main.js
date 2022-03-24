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
let About = document.querySelector('#about').offsetTop;
let Works = document.querySelector('#works').offsetTop;
let Career = document.querySelector('#career').offsetTop;
let Playground = document.querySelector('#playGround').offsetTop;

hightedWords.forEach((hightedWord) => {
    hightedWord.addEventListener("mouseover", function () {
        // console.log("hello");
        hightedWord.classList.add("hover");
    });
    hightedWord.addEventListener("mouseleave", function () {
        // console.log("bye");
        hightedWord.classList.remove("hover");
    });
    hightedWord.addEventListener('click',function(){
        window.scroll({top:eval(this.innerText),behavior:'smooth'})
        console.log('clickclick');
        console.log('id값' + this.innerText)
        
    })
});

// 스크롤 확인용
document.addEventListener('scroll', function navScroll() {
    let scrollY = document.documentElement.scrollTop;
    console.log('scroll : ' + scrollY);
});




