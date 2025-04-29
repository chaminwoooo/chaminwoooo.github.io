'use strict';


let testTxt = document.createElement('p');
document.body.appendChild(testTxt);

function add(a,b) {
    return a + b;
}
let result = add(3, 9);




let fruit = ['apple', 'banana', 'melon'];

fruit.pop(); // 맨뒤 배열 빼기
fruit.push('무지개'); // 맨뒤 배열 넣기
fruit.shift(); // 맨 앞 배열 빼기
fruit.unshift('잔나비'); /// 맨 앞 배열 넣기

testTxt.textContent = fruit;


let numList = [2,4,6];

let mapNum = numList.map(function (num,index,all) {
    return num * 2;
})

testTxt.textContent = mapNum;