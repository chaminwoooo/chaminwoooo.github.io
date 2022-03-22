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
hightedWords.forEach((hightedWord) => {
    hightedWord.addEventListener("mouseover", function () {
        console.log("hello");
        hightedWord.classList.add("hover");
    });
    hightedWord.addEventListener("mouseleave", function () {
        console.log("bye");
        hightedWord.classList.remove("hover");
    });
});

// stacklist
const percentHtml = document.querySelector('.progress-html .percent');
const percentCss = document.querySelector('.progress-css .percent');
const percentJs = document.querySelector('.progress-js .percent');

const progressHtml = document.querySelector('.progress-fill.case1 rect');
const progressCss = document.querySelector('.progress-fill.case2 rect');
const progressJs = document.querySelector('.progress-fill.case3 rect');

const numHtml = percentHtml.innerText = "80"
const numCss = percentCss.innerText = "80"
const numJs = percentJs.innerText = "65"

// progressHtml.style.width = numHtml + "%"
progressCss.style.width = numCss + "%"
progressJs.style.width = numJs + "%"

function progressBar() {
    // progressHtml.animate({
    //     width:"0%",width:numHtml +"%"
    // },2000);

    // progressHtml.setTimeout(() => {
    //     progressHtml.style.width = numHtml + "%"
    // }, 2000);
    
}
progressBar();