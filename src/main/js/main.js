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
