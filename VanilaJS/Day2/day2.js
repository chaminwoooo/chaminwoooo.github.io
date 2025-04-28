'use strict';
//  확인하고 싶을때는 함수 호출해서 확인해보기

let testTxt = document.createElement('p');
document.body.appendChild(testTxt);

function ifElseTen() {
    let valueNum = prompt('1 ~ 10 숫자를 입력하세요');

    if(valueNum > 10) {
        testTxt.textContent = '10보다 큽니다';
    } else if (valueNum == 10) {
        testTxt.textContent = '10이네욥';
    } else {
        testTxt.textContent = '10보다 작아요';
    } 
}

function TellMeFruit() {
    let fruitName = prompt('apple || banana || melon');

    console.log(typeof fruitName);

    switch (fruitName) {
        case 'apple':
            testTxt.textContent = '사과입니다';
            break;
    
        case 'banana' :
            testTxt.textContent = '바나나입니다';
            break;
    
        case 'melon' :
            testTxt.textContent = '멜론입니다';
            break;
    
        default:
            testTxt.textContent = '과일을 말해주세요 (사과 / 바나나 / 멜론)';
            break;
    }
}

function miniGameWithComputer() {
    const comAnswer = Math.floor(Math.random() * 10) + 1;
    let guess = prompt('1 ~ 10 숫자를 입력하세요');

    if (comAnswer == guess) {
        testTxt.textContent = '오호! 정답';
        console.log(comAnswer);
    } else if (comAnswer > guess) {
        testTxt.textContent = 'Up!';
        console.log(comAnswer);
    } else {
        testTxt.textContent = 'Down!';
        console.log(comAnswer);
    }
}

















