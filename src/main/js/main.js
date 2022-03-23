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
        // console.log("hello");
        hightedWord.classList.add("hover");
    });
    hightedWord.addEventListener("mouseleave", function () {
        // console.log("bye");
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
let numHtml = percentHtml.innerText = 85
let numCss = percentCss.innerText = 80
let numJs = percentJs.innerText = 65

progressHtml.style.width = numHtml + "%"
progressCss.style.width = numCss + "%"
progressJs.style.width = numJs + "%"

function progressIncrease() {
    const progressHtml = document.querySelector('.progress-fill.case1 rect');
    let progressWidth = 0;
    let intervalHtml  = setInterval(frame, 20);
    let intervalCss  = setInterval(frame, 20);
    let intervalJs  = setInterval(frame, 20);

    function frame() {
        if (progressWidth >= numHtml) {
            clearInterval(intervalHtml);
        }else {
            progressWidth++;
            progressHtml.style.width = progressWidth + '%';
        }
        if (progressWidth >= numCss) {
            clearInterval(intervalCss);
        }else {
            progressWidth++;
            progressCss.style.width = progressWidth + '%';
        }
        if (progressWidth >= numJs) {
            clearInterval(intervalJs);
        }else {
            progressWidth++;
            progressJs.style.width = progressWidth + '%';
        }
    }
}
progressIncrease();

// planNav.find('li').click(function(){
//     $(window).off('scroll.planNavEvent');
//     navLayer.addClass('fixed');
//     navLayer.find('.navImg img').removeClass('on');
//     navLayer.find('.navImg img').eq($(this).index()).addClass('on');
//     $('html,body').stop().animate({scrollTop:$('#'+$(this).text()).offset().top - (navHeight + topHeight)},800,function(){
//         panNavInit();
//     });
// });
